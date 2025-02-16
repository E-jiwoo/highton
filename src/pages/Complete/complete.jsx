import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Layout from "../../components/Layout/layout";
import planet from "../../assets/planet.svg";
import arrow from "../../assets/chatarrow.svg";

const Complete = () => {
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate("/choose");
  };

  return (
    <Layout>
      <S.Container>
        <S.Contain>
          <S.Img src={planet} alt="행성" />
          <S.Text>업로드를 완료했습니다!</S.Text>
          <S.ChatBtn onClick={handleChatClick}>
            나와 채팅하기
            <S.Icon src={arrow} />
          </S.ChatBtn>
        </S.Contain>
      </S.Container>
    </Layout>
  );
};

export default Complete;