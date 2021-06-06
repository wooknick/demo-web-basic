import React from "react";
import styled, { css } from "styled-components";
import useDevice from "../Hooks/useDevice";

const Wrapper = styled.section`
  width: 100%;
  min-height: 600px;
  background-color: ${(props) => props.theme.color.lightGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0 3rem 0;
`;

const Title = styled.div`
  font-size: 2.5rem;
  margin: 2rem;
  font-weight: bold;
`;

const BoxWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth.bgScreen};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`;

const BoxCSS = css`
  width: 30%;
  min-width: 300px;
  height: 280px;
  margin: 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  border: 4px solid white;
`;

const BoxMobileCSS = css`
  width: 100%;
  background-color: white;
  border: 4px solid white;
  margin: 4px 1rem;
  padding: 1rem;
`;

const Box = styled.div`
  ${(props) => (props.device === "mobile" ? BoxMobileCSS : BoxCSS)};
  &:hover {
    transition: border 0.2s ease-in;
    cursor: pointer;
    border: 4px solid ${(props) => props.theme.color.pointYellow};
  }
`;

const BoxTitle = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1em;
`;

const BoxDesc = styled.div`
  /* width: 100%; */
`;

const MainGrid = () => {
  const { device } = useDevice();
  return (
    <Wrapper>
      <Title>Product</Title>
      <BoxWrapper>
        <Box device={device}>
          <BoxTitle>Fermentum</BoxTitle>
          <BoxDesc>
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
            ut fermentum massa justo sit amet risus. Donec id elit non mi porta
            gravida at eget metus.
          </BoxDesc>
        </Box>
        <Box device={device}>
          <BoxTitle>Adipiscing</BoxTitle>
          <BoxDesc>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
            dolor auctor. Integer posuere erat a ante venenatis dapibus posuere
            velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id
            elit.
          </BoxDesc>
        </Box>
        <Box device={device}>
          <BoxTitle>Etiam</BoxTitle>
          <BoxDesc>
            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Maecenas sed diam eget risus varius blandit sit amet non magna.
          </BoxDesc>
        </Box>
        <Box device={device}>
          <BoxTitle>Adipiscing</BoxTitle>
          <BoxDesc>
            Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus
            sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec
            sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </BoxDesc>
        </Box>
        <Box device={device}>
          <BoxTitle>Ullamcorper</BoxTitle>
          <BoxDesc>
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </BoxDesc>
        </Box>
        <Box device={device}>
          <BoxTitle>Risus</BoxTitle>
          <BoxDesc>
            Cras mattis consectetur purus sit amet fermentum. Vestibulum id
            ligula porta felis euismod semper. Donec sed odio dui.
          </BoxDesc>
        </Box>
      </BoxWrapper>
    </Wrapper>
  );
};

export default MainGrid;
