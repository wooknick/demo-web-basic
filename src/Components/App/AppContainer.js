import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import DeviceContext from "../../Context/DeviceContext";
import globalVariables from "../../globalStaticVariables";
import AppPresenter from "./AppPresenter";

const AppContainer = () => {
  const { bgScreen, mdScreen, smScreen } = globalVariables.breakPoints;

  const [device, setDevice] = useState("");

  const isBgScreen = useMediaQuery({
    query: `(min-width:${bgScreen}px)`,
  });
  const isMdScreen = useMediaQuery({
    query: `(min-width:${mdScreen}px) and (max-width:${bgScreen - 1}px)`,
  });
  const isTablet = useMediaQuery({
    query: `(min-width:${smScreen}px) and (max-width:${mdScreen - 1}px)`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width:${smScreen}px)`,
  });

  useEffect(() => {
    if (isBgScreen) {
      setDevice("bgScreen");
    } else if (isMdScreen) {
      setDevice("mdScreen");
    } else if (isTablet) {
      setDevice("tablet");
    } else if (isMobile) {
      setDevice("mobile");
    }
  }, [isBgScreen, isMdScreen, isTablet, isMobile]);

  return (
    <>
      <DeviceContext.Provider value={{ device }}>
        <AppPresenter device={device} />
      </DeviceContext.Provider>
    </>
  );
};

export default AppContainer;
