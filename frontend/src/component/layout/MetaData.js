import React from "react";
import Helmet from "react-helmet";

// This will set the title of any page we are in to the title we pass
const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default MetaData;
