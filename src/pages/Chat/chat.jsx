import React from "react";
import Layout from "../../components/Layout/layout";
import * as S from "./style";

const chat = () => {
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
    </>
  );
};

export default chat;
