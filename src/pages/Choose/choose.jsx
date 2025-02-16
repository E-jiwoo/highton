import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Layout from "../../components/Layout/layout";
import planet from "../../assets/planet.svg";
import arrow from "../../assets/chatarrow2.svg";

const Choose = () => {
  const [selectedBtn, setSelectedBtn] = useState(null);
  const navigate = useNavigate();

  const handleBtnClick = (index) => {
    setSelectedBtn(index);
    if (index === 4) {
      navigate("/chat");
    }
  };

  return (
    <Layout>
      <S.Container>
        <S.Contain>
          <S.Img src={planet} alt="행성" />
          <S.Text>지우! 요즘 고민이 많아?</S.Text>
          <S.Text2>'고민, 후우우..'단어 사용이 많아요</S.Text2>
          <S.Btn2
            style={selectedBtn === 1 ? { backgroundColor: "#672AE9" } : {}}
            onClick={() => handleBtnClick(1)}
          >
            과거 고민해결 돌아보기
          </S.Btn2>
          <S.Btn2
            style={selectedBtn === 2 ? { backgroundColor: "#672AE9" } : {}}
            onClick={() => handleBtnClick(2)}
          >
            스스로 극복했던 경험돌아보기
          </S.Btn2>
          <S.Btn2
            style={selectedBtn === 3 ? { backgroundColor: "#672AE9" } : {}}
            onClick={() => handleBtnClick(3)}
          >
            고민 털어놓기
          </S.Btn2>
          <S.Btn2
            style={selectedBtn === 4 ? { backgroundColor: "#672AE9" } : {}}
            onClick={() => handleBtnClick(4)}
          >
            바로 대화 시작하기
            <S.Icon src={arrow} />
          </S.Btn2>
        </S.Contain>
      </S.Container>
    </Layout>
  );
};

export default Choose;
