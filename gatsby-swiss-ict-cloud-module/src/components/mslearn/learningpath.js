import { Link as GatsbyLink, StaticQuery, graphql } from 'gatsby';
import isAbsoluteUrl from 'is-absolute-url';

import { useEffect } from 'react';

import React, { Component } from 'react';

export const query = graphql`
  query {
    allCertification(
      filter: {
        certification_type: { eq: "fundamentals" }
        exams: { elemMatch: { products: { elemMatch: { id: { eq: "azure" } } } } }
      }
    ) {
      nodes {
        id
        title
        subtitle
        url
        icon_url
        certification_type
        roles {
          id
        }
        levels {
          id
        }
        exams {
          id
          title
          subtitle
          url
          display_name
          icon_url
          courses {
            id
            locales
            title
            summary
            duration_in_hours
            url
            icon_url

            study_guide {
              uid # todo link in Gatsby
              type
            }
          }
          products {
            id
            name
          }
          providers {
            providerType
            examUrl
          }
          roles {
            id
            name
          }
        }
      }
    }
  }
`;

// StaticQuery
// https://www.gatsbyjs.com/docs/how-to/querying-data/static-query/

const renderLearningPath = (data) => {
  console.log(data);

  return <div>Baz!</div>;
};

const LearningPath = ({ id, ...props }) => {
  return <StaticQuery query={query} render={renderLearningPath}></StaticQuery>;
};

export default LearningPath;
