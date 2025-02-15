import React, { useState } from "react";
import * as S from "./style";
import { useLocation } from "react-router-dom";
import Layout from "../../components/Layout/layout";
import planet from "../../assets/planet.svg";
import question from "../../assets/question.svg";
import del from "../../assets/delete.svg";

const Data = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleDelete = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <Layout>
      <S.Container>
        <S.Contain>
          <S.Img src={planet} alt="행성" />
          <S.Text>아름님의 가장 최근 업로드는</S.Text>
          <S.SBText>
            2025년 02월 16일 <S.SBText_o>이였어요</S.SBText_o>
          </S.SBText>
          <input
            type="file"
            id="file-upload"
            style={{ display: "none" }}
            onChange={handleFileChange}
            multiple
          />
          {selectedFiles.map((file, index) => (
            <S.FileName key={index}>
              {file.name}
              <S.Delete
                src={del}
                alt="삭제"
                onClick={() => handleDelete(index)}
              />
            </S.FileName>
          ))}
          <S.SelectBtn
            onClick={() => document.getElementById("file-upload").click()}
          >
            {selectedFiles.length > 0 ? "추가 선택" : "파일 선택하기"}
          </S.SelectBtn>

          <S.UploadBtn>업로드하기</S.UploadBtn>
          <S.Announce>카카오톡 txt 파일을 업로드 해주세요.</S.Announce>
          <S.Icon src={question} alt="물음표" />
          <S.SBText_16>카카오톡 txt 파일은 어떻게 만드나요?</S.SBText_16>
          <S.BoxContain>
            <S.Box>
              <S.SBText_20>1</S.SBText_20>
              카카오톡을 켜서
              <br /> 대화 내용을 가져올 채팅방에 들어가세요
            </S.Box>
            <S.Box>
              <S.SBText_20>2</S.SBText_20>
              우측 상단의 더보기 버튼을 눌러
              <br /> 설정에 들어가세요
            </S.Box>
            <S.Box>
              <S.SBText_20>3</S.SBText_20>
              대화 내용 내보내기를 눌러
              <br /> 텍스트 메시지만 저장을 누르면 완료!
            </S.Box>
          </S.BoxContain>
        </S.Contain>
      </S.Container>
    </Layout>
  );
};

export default Data;
