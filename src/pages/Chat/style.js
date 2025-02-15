import styled from "styled-components";

export const Container = styled.div`
  width: 402px;
  height: 850px;
  background-image: linear-gradient(to bottom, #070118, #2c2a49);
`;

export const Contain = styled.div``;

export const Chatbot = styled.div`
  position: relative;
  top: 130px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 15px;
`;

export const Profile = styled.div`
  margin-left: 20px;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: #672ae9;
`;
export const Speech = styled.div`
  background-color: #352f46;
  color: #fff;
  font-size: 14px;
  font-family: "Pretendard-R";
  padding: 0px 15px;
  border-radius: 5px 50px 50px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Time = styled.div`
  color: #aca2c5;
  font-size: 10px;
  font-family: "Pretendard-R";
  margin-top: 15px;
`;

export const User = styled.div`
  position: relative;
  top: 160px;
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 15px;
`;

export const Speech2 = styled.div`
  background-color: #672ae9;
  color: #fff;
  font-size: 14px;
  font-family: "Pretendard-R";
  padding: 8px 18px;
  border-radius: 50px 5px 50px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextInputWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 60px;
  margin-left: 40px;
  display: flex;
  align-items: center;
`;

export const Next = styled.img`
  margin-right: 15px;
`;

export const TextInput = styled.input`
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

export const Send = styled.img`
  position: absolute;
  right: 70px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
