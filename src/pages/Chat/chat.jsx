// src/pages/Chat/ChatPage.jsx
import React, { useEffect, useState, useRef } from "react";
import Layout from "../../components/Layout/layout";
import * as S from "./style";
import sendingIcon from "../../assets/sending.svg";
import nextIcon from "../../assets/next.svg";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const ws = useRef(null);

  // Initialize WebSocket connection
  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8006/ws/chat/");

    ws.current.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.status === "success") {
          // Append bot response to messages
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now(),
              text: data.response,
              sender: "bot",
              time: new Date(),
            },
          ]);
        } else if (data.status === "error") {
          console.error("Server error:", data.message);
        }
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    };

    ws.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.current.onclose = (e) => {
      console.log("WebSocket closed:", e);
    };

    // Clean up on unmount
    return () => {
      ws.current.close();
    };
  }, []);

  // Send message over WebSocket
  const sendMessage = () => {
    if (!inputMessage.trim()) return;
    const messageObj = {
      action: "get_user_model",
      query: inputMessage,
    };

    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(messageObj));
    } else {
      console.error("WebSocket is not open.");
    }

    // Add user message locally
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: inputMessage, sender: "user", time: new Date() },
    ]);
    setInputMessage("");
  };

  // Handle Enter key for message submission
  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  // Format time in Korean locale with AM/PM
  const formatTime = (date) =>
    new Intl.DateTimeFormat("ko-KR", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);

  return (
    <>
      <Layout>
        <S.Container>
          <S.Contain>
            {messages.map((msg) =>
              msg.sender === "bot" ? (
                <S.Chatbot key={msg.id}>
                  <S.Profile />
                  <S.Speech>{msg.text}</S.Speech>
                  <S.Time>{formatTime(msg.time)}</S.Time>
                </S.Chatbot>
              ) : (
                <S.User key={msg.id}>
                  {/* <S.Time>{formatTime(msg.time)}</S.Time> */}
                  <S.Speech2>{msg.text}</S.Speech2>
                </S.User>
              )
            )}
          </S.Contain>
        </S.Container>
      </Layout>
      <S.TextInputWrapper>
        <S.Next src={nextIcon} alt="다음" />
        <S.TextInput
          placeholder="메시지를 입력하세요..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleInputKeyPress}
        />
        <S.Send src={sendingIcon} alt="전송" onClick={sendMessage} />
      </S.TextInputWrapper>
    </>
  );
};

export default ChatPage;
