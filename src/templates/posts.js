import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';

import SEO from '../components/seo';
import Layout from '../components/layout.js';
import Pagination from '../components/Pagination';
import Blog from '../components/Blog/Blog.js';
export const Root = styled.div`
  font-family: 'sofia-pro', Sans-serif;
  padding: 50px 25px 25px 25px;
  margin: 0 auto 0 auto;
  max-width: 1280px;
  hr {
    text-align: center;
    margin: 0 auto 3rem auto;
    border-top: 1.5px solid #8062c6;
    width: 10%;
  }

  h2 {
    text-align: center;
    font-family: 'brandon-grotesque', Sans-serif;
    font-size: 56px;
    font-weight: 300;
    line-height: 1.3em;
    letter-spacing: 1.7px;
  }
  @media (max-width: 600px) {
    h2 {
      font-size: 45px;
    }
  }
`;

const Posts = (props) => {
  const {
    data: {
      wpgraphql: { posts },
    },
    pageContext: { pageNumber, hasNextPage },
  } = props;

  console.log(posts);

  return (
    <Layout>
      <SEO title='Blog' />
      <Root>
        <h2>Our Blog</h2>
        <hr />
        <Blog posts={posts} />
        <Pagination pageNumber={pageNumber} hasNextPage={hasNextPage} />
      </Root>
    </Layout>
  );
};

export default Posts;

export const postQuery = graphql`
  query GET_POSTS($ids: [ID]) {
    wpgraphql {
      posts(where: { in: $ids }) {
        nodes {
          title
          id
          date
          slug
          uri
          excerpt
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
