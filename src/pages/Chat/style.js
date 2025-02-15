import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom, #070118, #2c2a49);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 초과 요소 숨기기 */
`;

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 420px; /* 가로 최대 크기 제한 */
  height: 90vh;
`;

export const ChatBox = styled.div`
  width: 100%;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  background: transparent; /* 배경 흰색 제거 */
  padding: 20px;
`;

export const MessageContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  max-height: 70vh; /* 메시지 창 크기 제한 */
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const Message = styled.div`
  background-color: ${(props) => (props.isMyMessage ? "#4f93e2" : "#e2e2e2")};
  color: ${(props) => (props.isMyMessage ? "white" : "black")};
  padding: 10px;
  border-radius: 12px;
  max-width: 75%;
  align-self: ${(props) => (props.isMyMessage ? "flex-end" : "flex-start")};
  margin: 5px 0;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  bottom: 0;
  gap: 10px;
  padding: 10px;
  border-top: 1px solid #ccc;
`;

export const InputText = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
`;

export const SendBtn = styled.button`
  background-color: #4f93e2;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #3578c8;
  }
`;
