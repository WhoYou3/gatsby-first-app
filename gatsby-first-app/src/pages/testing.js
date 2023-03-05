import React from "react";
import { graphql } from "gatsby";

const Testing = (props) => {
  console.log(props);
  return <div>Testing</div>;
};

export default Testing;

export const data = graphql`
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
