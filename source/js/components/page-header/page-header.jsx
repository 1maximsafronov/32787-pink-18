import React from "react";
import PropTypes from "prop-types";
import MainNav from "../main-nav/main-nav";

const PageHeader = (props) => {
  return (
    <header className="page-header">
      <MainNav />
      {props.children}
    </header>
  );
};

PageHeader.propTypes = {
  children: PropTypes.node
};

export default PageHeader;
