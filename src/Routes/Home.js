import React from "react";
import styled from "styled-components";
import MainGrid from "../Components/MainGrid";
import MainImage from "../Components/MainImage";
import MainImageSlider from "../Components/MainImageSlider";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Home = () => {
  return (
    <>
      <Wrapper>
        <MainImageSlider />
        <MainImage />
        <MainGrid />
      </Wrapper>
    </>
  );
};

export default Home;
