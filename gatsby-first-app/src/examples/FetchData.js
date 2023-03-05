import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  {
    site {
      siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
        }
        person {
          age
          name
        }
      }
    }
  }
`;

const FetchData = () => {
  const data = useStaticQuery(getData);

  return <div></div>;
};

export default FetchData;
