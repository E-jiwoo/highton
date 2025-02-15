import React from "react";
import Layout from "../../components/Layout/layout";
import * as S from "./style";
import styled from "styled-components";
import sending from "../../assets/sending.svg";
import next from "../../assets/next.svg";

const chating = () => {
  return (
    <>
      <Layout>
        <S.Container>
          <S.Contain>
            <S.Chatbot>
              <S.Profile />
              <S.Speech>아름! 동생이랑 도쿄 여행 가는거야?</S.Speech>
              <S.Time>오후 5:33</S.Time>
            </S.Chatbot>
            <S.Chatbot>
              <S.Profile />
              <S.Speech>아름! 동생이랑 도쿄 여행 가는거야?</S.Speech>
              <S.Time>오후 5:33</S.Time>
            </S.Chatbot>
            <S.User>
              <S.Time>오후 5:33</S.Time>
              <S.Speech2>아름! 동생이랑 도쿄 여행 가는거야?</S.Speech2>
            </S.User>
          </S.Contain>
        </S.Container>
      </Layout>
      <S.TextInputWrapper>
        <S.Next src={next} alt="다음" />
        <S.TextInput placeholder="메시지를 입력하세요..." />
        <S.Send src={sending} alt="전송" />
      </S.TextInputWrapper>
    </>
  );
};

export default chating;
