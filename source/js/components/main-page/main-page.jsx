import React from "react";
import PropTypes from "prop-types";

import PageHeader from "../page-header/page-header";
import PageFooter from "../page-footer/page-footer";

import Price from "../price/price";

const MainPage = () => {
  return (
    <React.Fragment>
      <PageHeader />
      <Price />
      <PageFooter />
    </React.Fragment>
  );
};


export default MainPage;
