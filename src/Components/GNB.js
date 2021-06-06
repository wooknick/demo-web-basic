import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import useDevice from "../Hooks/useDevice";
import { Menu as MenuIcon, X as XIcon } from "./Icons";

const Wrapper = styled.div`
  display: flex;
`;

const Menu = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const NavMobileCSS = css`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-top: 3rem;
  li {
    height: 6rem;
    font-size: 2rem;
    &:hover {
      transition: background-color 0.3s ease-in;
      background-color: ${(props) => props.theme.color.pointYellow};
    }
  }
  div {
    position: absolute;
    top: 16px;
    right: 16px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const NavCSS = css`
  display: flex;
  li {
    margin-right: 2rem;
    padding: 4px 0;
    &:hover {
      cursor: pointer;
      /* transition: border-bottom 0.3s ease-in; */
      border-bottom: 2px solid ${(props) => props.theme.color.pointYellow};
    }
  }
  li:last-child {
    margin-right: 0;
  }
`;

const Nav = styled.ul`
  ${(props) => (props.device === "mobile" ? NavMobileCSS : NavCSS)};
`;

const NavItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GNB = ({ moveTo }) => {
  const { device } = useDevice();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (device !== "mobile") {
      setIsActive(false);
    }
  }, [device]);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [isActive]);

  const toggleMenu = () => {
    setIsActive((v) => !v);
  };

  return (
    <Wrapper>
      {device === "mobile" && (
        <Menu onClick={toggleMenu}>
          <MenuIcon />
        </Menu>
      )}
      {(device !== "mobile" || isActive) && (
        <Nav device={device}>
          {device === "mobile" && (
            <div onClick={toggleMenu}>
              <XIcon size={16} />
            </div>
          )}
          <NavItem
            onClick={() => {
              if (device === "mobile") {
                toggleMenu();
              }
              moveTo("/about");
            }}
          >
            About
          </NavItem>
          <NavItem
            onClick={() => {
              if (device === "mobile") {
                toggleMenu();
              }
              moveTo("/first");
            }}
          >
            First
          </NavItem>
          <NavItem
            onClick={() => {
              if (device === "mobile") {
                toggleMenu();
              }
              moveTo("/second");
            }}
          >
            Second
          </NavItem>
        </Nav>
      )}
    </Wrapper>
  );
};

export default GNB;
