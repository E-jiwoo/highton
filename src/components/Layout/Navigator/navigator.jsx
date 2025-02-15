import React, { startTransition } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import data from "../../../assets/data.svg";
import send from "../../../assets/send.svg";
import my from "../../../assets/my.svg";
import chat from "../../../assets/chat.svg";
import plus from "../../../assets/plus.svg";
import sending from "../../../assets/sending.svg";
import next from "../../../assets/next.svg";

const Navigator = () => {
  const location = useLocation(); // Get the current path

  return (
    <Nav>
      {location.pathname !== "/chat" ? ( // Show the default bar unless on the /chat page
        <>
          <NavItem>
            <NavLink to="/plus">
              <Icon src={plus} alt="더보기" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/data">
              <Icon src={data} alt="데이터" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/chat">
              <Chat src={chat} alt="채팅" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/send">
              <Icon src={send} alt="보내기" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/my">
              <Icon src={my} alt="프로필" />
            </NavLink>
          </NavItem>
        </>
      ) : (
        <NavItem>
          <NavLink to="/chat">
            <TextInputWrapper>
              <Next src={next} alt="다음" />
              <TextInput placeholder="메시지를 입력하세요..." />
              <Send src={sending} alt="전송" />
            </TextInputWrapper>
          </NavLink>
        </NavItem>
      )}
    </Nav>
  );
};

const Nav = styled.div`
  position: fixed;
  width: 402px;
  height: 56px;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #070118;
`;

const NavItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img``;

const Chat = styled.img`
  margin-bottom: 30px;
`;

const TextInputWrapper = styled.div`
  position: relative;
  width: 400px;
  margin-left: 40px;
  display: flex;
  align-items: center;
`;

const Next = styled.img`
  margin-right: 15px;
`;

const TextInput = styled.input`
  width: 260px;
  padding: 12px;
  margin-right: 20px;
  background-color: #352f46;
  color: #fff;
  border-radius: 24px;
  border: none;
  font-size: 14px;
  font-family: "Pretendard-R";
  outline: none;
`;

const Send = styled.img`
  position: absolute;
  right: 70px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export default Navigator;
