import styled from "styled-components";

export const Container = styled.div`
  width: 402px;
  height: 900px;
  background-image: linear-gradient(to bottom, #070118, #2c2a49);
`;

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
  word-wrap: break-word;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  height: calc(100% - 60px);
`;

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
  top: 130px;
  margin-left: 230px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 15px;
`;

export const Speech2 = styled.div`
  background-color: #672ae9;
  padding: 10px;
  border-radius: 8px;
  max-width: 100%;
  word-wrap: break-word;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  font-size: 1rem;
  line-height: 1.4;
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
