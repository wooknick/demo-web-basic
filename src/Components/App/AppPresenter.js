import React from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import Routes from "../Routes";
import Header from "../Header";
import Theme from "../../Styles/Theme";
import GlobalStyles from "../../Styles/GlobalStyles";
import Footer from "../Footer";

const AppPresenter = ({ device }) => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles device={device} />
        <Router>
          <Header />
          <Routes />
          <Footer />
        </Router>
      </>
    </ThemeProvider>
  );
};

export default AppPresenter;
