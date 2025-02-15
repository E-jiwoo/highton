import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import data from "../../../assets/data.svg";
import send from "../../../assets/send.svg";
import my from "../../../assets/my.svg";
import chat from "../../../assets/chat.svg";
import plus from "../../../assets/plus.svg";

const Navigator = () => {
  return (
    <>
      <Nav>
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
      </Nav>
    </>
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

export default Navigator;
