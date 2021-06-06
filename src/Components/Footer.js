import React from "react";
import styled, { css } from "styled-components";
import useDevice from "../Hooks/useDevice";

const Wrapper = styled.div`
  width: 100%;
  height: 192px;
  border-top: 1px solid ${(props) => props.theme.color.lightGrey};
`;

const ContentsMobileCSS = css`
  align-content: center;
  padding: 0 2rem;
  & > div {
    width: 100%;
  }
  & > div:first-child {
    align-items: center;
    text-align: center;
  }
`;

const ContentsCSS = css`
  & > div {
    width: 33%;
  }
  & > div:first-child {
    align-items: flex-start;
  }
`;

const Contents = styled.div`
  width: ${(props) => props.theme.maxWidth[props.device]};
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  ${(props) => (props.device === "mobile" ? ContentsMobileCSS : ContentsCSS)};
`;

const ContentsPart = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 1em;
`;

const Title = styled.div`
  width: 100%;
  font-size: 1.5rem;
  letter-spacing: 8px;
  margin-bottom: 0.4em;
`;

const SubTitle = styled.div`
  font-weight: 300;
`;

const Copyright = styled.div``;

const Footer = () => {
  const { device } = useDevice();
  return (
    <Wrapper device={device}>
      <Contents device={device}>
        <ContentsPart>
          <Title>Logo</Title>
          <SubTitle>Be happy for no reason, like a child.</SubTitle>
        </ContentsPart>
        <ContentsPart>
          <Copyright>&copy; 2021 by Name</Copyright>
        </ContentsPart>
      </Contents>
    </Wrapper>
  );
};

export default Footer;
