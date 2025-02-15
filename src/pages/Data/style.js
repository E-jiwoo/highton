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

export const Text = styled.p`
  font-family: "Pretendard-M";
  font-size: 16px;
  margin-bottom: 4px;
`;

export const SBText = styled.div`
  font-family: "Pretendard-SB";
  font-size: 24px;
  display: inline;
`;

export const SBText_o = styled.div`
  font-family: "Pretendard-SB";
  opacity: 60%;
  font-size: 24px;
  display: inline;
`;

export const Img = styled.img`
  margin-top: 5px;
  width: 270px;
  height: 270px;
  mix-blend-mode: screen;
`;

export const SelectBtn = styled.button`
  font-family: "Pretendard-SB";
  width: 125px;
  height: 43px;
  color: #070018;
  background-image: linear-gradient(to bottom, #bfbcf5 0%, #cfccfb 100%);
  border: 1px solid;
  border-color: #7761b4;
  margin-top: 40px;
`;

export const UploadBtn = styled.button`
  font-family: "Pretendard-M";
  width: 354px;
  height: 43px;
  border-radius: 100px;
  color: #ffffff;
  background-color: #672ae9;
  border: 1px solid;
  border-color: #7761b4;
  margin-top: 12px;
  margin-bottom: 8px;
`;

export const UploadStatus = styled.div`
  font-family: "Pretendard-M";
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  padding: 8px 16px;
  border-radius: 8px;
  width: fit-content;
  color: ${({ success }) => (success ? "#2E7D32" : "#D32F2F")};
  background-color: ${({ success }) => (success ? "#E8F5E9" : "#FFEBEE")};
  border: 1px solid ${({ success }) => (success ? "#4CAF50" : "#F44336")};
`;

export const Announce = styled.p`
  margin-bottom: 30px;
  font-family: "Pretendard-M";
  font-size: 12px;
`;

export const Icon = styled.img`
  width: 36px;
  height: 36px;
`;

export const SBText_16 = styled.div`
  font-family: "Pretendard-SB";
  font-size: 16px;
  color: #c9c6f9;
  margin-top: 8px;
`;

export const Box = styled.div`
  width: 324px;
  height: 200px;
  padding: 30px;
  border: 1px solid;
  border-radius: 20px;
  background-color: #332b47;
  border-color: #7761b4;
  opacity: 64%;
  margin-top: 20px;
`;

export const SBText_20 = styled.p`
  font-family: "Pretendartd-M";
  font-size: 20px;
`;

export const BoxContain = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  max-width: 100%;
  margin-left: 80px;
`;

export const FileName = styled.div`
  width: 300px;
  height: 48px;
  background-color: #2d2845;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 25px;
  border: 1px solid #7761b4;
  border-radius: 12px;
  margin-top: 35px;
`;

export const Delete = styled.img``;
