import styled from "styled-components";

export const Container = styled.div`
  width: 402px;
  height: 966px;
  background-color: white;
  background-image: linear-gradient(to bottom, #070118, #2c2a49);
`;

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  margin-top: 150px;
  width: 270px;
  height: 270px;
  mix-blend-mode: screen;
`;

export const Text = styled.p`
  font-family: "Pretendard-SB";
  font-size: 24px;
`;

export const ChatBtn = styled.button`
  font-family: "Pretendard-M";
  width: 354px;
  height: 43px;
  border-radius: 100px;
  color: #ffffff;
  background-color: #672ae9;
  border: 1px solid;
  border-color: #7761b4;
  margin-top: 24px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  margin-left: 10px;
`;
