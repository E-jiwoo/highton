import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Stomp } from "@stomp/stompjs";
import * as S from "./style";
import Layout from "../../components/Layout/layout";

const Chat = () => {
  const stompClient = useRef(null);
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const connect = () => {
    const socket = new WebSocket("ws://localhost:8080/ws");
    stompClient.current = Stomp.over(socket);
    stompClient.current.connect({}, () => {
      stompClient.current.subscribe(`/sub/chatroom/1`, (message) => {
        const newMessage = JSON.parse(message.body);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });
    });
  };

  const disconnect = () => {
    if (stompClient.current) {
      stompClient.current.disconnect();
    }
  };

  const fetchMessages = () => {
    axios.get("http://localhost:8080/chat/1").then((response) => {
      setMessages(response.data);
    });
  };

  useEffect(() => {
    connect();
    fetchMessages();
    return () => disconnect();
  }, []);

  const sendMessage = () => {
    if (stompClient.current && inputValue.trim()) {
      const body = {
        id: 1,
        name: "테스트1",
        message: inputValue,
      };
      stompClient.current.send(`/pub/message`, {}, JSON.stringify(body));
      setInputValue("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Layout>
      <S.Container>
        <S.Contain>
          <S.ChatBox>
            <S.MessageContainer>
              {messages.map((item, index) => (
                <S.Message key={index} isMyMessage={item.name === "테스트1"}>
                  {item.message}
                </S.Message>
              ))}
              <div ref={messagesEndRef} />
            </S.MessageContainer>
            <S.InputContainer>
              <S.InputText
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="메시지를 입력하세요..."
              />
              <S.SendBtn onClick={sendMessage}>전송</S.SendBtn>
            </S.InputContainer>
          </S.ChatBox>
        </S.Contain>
      </S.Container>
    </Layout>
  );
};

export default Chat;
