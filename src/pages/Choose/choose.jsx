import React, { useState } from "react";
import * as S from "./style";
import Layout from "../../components/Layout/layout";
import planet from "../../assets/planet.svg";
import arrow from "../../assets/chatarrow2.svg";

const Choose = () => {
  const [selectedBtn, setSelectedBtn] = useState(null);

  const handleBtnClick = (index) => {
    setSelectedBtn(index);
  };

  return (
    <>
      <Layout>
        <S.Container>
          <S.Contain>
            <S.Img src={planet} alt="행성" />
            <S.Text>아름! 일본 여행을 계획하고있어?</S.Text>
            <S.Text2>과거의 여행 추억도 돌아볼까?</S.Text2>
            <S.Btn2
              style={selectedBtn === 1 ? { backgroundColor: "#672AE9" } : {}}
              onClick={() => handleBtnClick(1)}
            >
              오사카 여행 추억 듣기
            </S.Btn2>
            <S.Btn2
              style={selectedBtn === 2 ? { backgroundColor: "#672AE9" } : {}}
              onClick={() => handleBtnClick(2)}
            >
              부모님과 강릉 여행 추억 듣기
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
    </>
  );
};

export default Choose;
