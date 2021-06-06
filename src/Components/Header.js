import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import useDevice from "../Hooks/useDevice";
import GNB from "./GNB";

const Margin = styled.div`
  width: 100%;
  height: ${(props) => (props.device === "mobile" ? "64px" : "128px")};
`;

const Wrapper = styled.section`
  width: 100%;
  height: ${(props) => (props.device === "mobile" ? "64px" : "128px")};
  background-color: white;
  border-bottom: 1px solid ${(props) => props.theme.color.lightGrey};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Contents = styled.div`
  width: ${(props) => props.theme.maxWidth[props.device]};
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.device === "mobile" ? "0 2rem" : "0")};
`;

const Logo = styled.div`
  font-size: 1.8rem;
  padding-left: 8px;
  letter-spacing: 8px;
  &:hover {
    cursor: pointer;
  }
`;

const Header = ({ location, history }) => {
  const { device } = useDevice();

  const moveTo = (url) => {
    history.push(url);
  };

  return (
    <>
      <Margin device={device} />
      <Wrapper device={device}>
        <Contents device={device}>
          <Logo
            onClick={() => {
              moveTo("/");
            }}
          >
            LOGO
          </Logo>
          <GNB moveTo={moveTo} />
        </Contents>
      </Wrapper>
    </>
  );
};

export default withRouter(Header);
