import React from "react";
import styled from "styled-components";
import useDevice from "../Hooks/useDevice";
import SpaceImg from "../Images/space.jpg";

const Wrapper = styled.section`
  width: 100%;
  height: 600px;
  position: relative;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 0 2rem;
  font-size: ${(props) => (props.device === "bgScreen" ? "1.2rem" : "1rem")};
`;

const Title = styled.div`
  font-family: ${(props) => props.theme.font.blackHanSans};
  font-size: 2em;
  color: white;
  text-align: center;
  word-break: keep-all;
  margin-bottom: 1rem;
`;

const Desc = styled.div`
  width: 100%;
  max-width: 720px;
  font-size: 1em;
  color: white;
  text-align: center;
  word-break: keep-all;
  line-height: 1.6;
`;

const MainImageSlider = () => {
  const { device } = useDevice();
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={SpaceImg} alt="space-img" />
      </ImageWrapper>
      <TextWrapper device={device}>
        <Title>당신의 서비스를 지원합니다.</Title>
        <Desc device={device}>
          당신이 상상한 모든 아이디어를 즐거운 웹 경험으로 바꾸어드립니다.
          <br />
          모던한 디자인의 사이트부터,
          <br />
          뚜렷한 개성이 돋보이는 포트폴리오 사이트,
          <br />
          그리고 다양한 인터랙션이 가미된 이벤트 페이지까지.
          <br />
          무한한 가능성을 펼쳐보세요.
        </Desc>
      </TextWrapper>
    </Wrapper>
  );
};

export default MainImageSlider;
