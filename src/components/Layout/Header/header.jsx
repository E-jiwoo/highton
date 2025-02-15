import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom"; // useLocation 훅을 가져옵니다.
import arrow from "../../../assets/arrow.svg";
import search from "../../../assets/search.svg";

const Header = () => {
  const location = useLocation(); // 현재 경로를 가져옵니다.

  // 페이지 경로에 따른 제목 설정
  const getTitle = () => {
    switch (location.pathname) {
      case "/chat":
        return "과거의 나";
      case "/choose":
        return "주제 선택";
      case "/complete":
        return "업로드 완료";
      default:
        return "데이터 업로드";
    }
  };

  return (
    <HeaderContainer>
      <Icon1 src={arrow} alt="뒤로 가기" />
      <Title>{getTitle()}</Title>
      <Icon2 src={search} alt="이전 기록 검색" />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  background-color: #070118;
  width: 402px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon1 = styled.img`
  margin-left: 25px;
`;

const Icon2 = styled.img`
  margin-right: 25px;
`;

const Title = styled.p`
  font-family: "Pretendard-SB";
  font-size: 16px;
`;

export default Header;
