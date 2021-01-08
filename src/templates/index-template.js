import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Fuse from 'fuse.js'
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import Filter from '../components/Filter'
import { useSiteMetadata } from '../hooks';
import type { PageContext, AllMarkdownRemark } from '../types';

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext
};

const IndexTemplate = ({ data, pageContext }: Props) => {

  const [keyword, setKeyword] = useState('');

  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath
  } = pageContext;

  let edges = [] 
  if(keyword == ''){ // search empty, use default page posts
    edges = data.page.edges
  } else { 
    let fuse = new Fuse(data.posts.edges, {
      includeScore: true,
      ignoreLocation: true,
      includeMatches: true,
      threshold: 0.4,
      keys: [ 'node.frontmatter.title', 'node.frontmatter.description' ]
    })
    let result = fuse.search(keyword)
    result.map( (result) => edges.push(result.item) )
    console.log(edges)
  }

  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;
  
  let numPosts = edges.length

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar isIndex />
      <Page>
        <Filter setKeyword={setKeyword}/>
        { (edges.length > 0) ? <Feed edges={edges} /> :
          <h1>Nothing to see here 😞</h1> 
        }
        { (keyword == '') ? <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        /> : null }
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    page: allMarkdownRemark(limit: $postsLimit, skip: $postsOffset, filter: {frontmatter: {template: {eq: "post"}}}, sort: {order: ASC, fields: [frontmatter___date]}) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
            draft
          }
        }
      }
    }
    
    posts: allMarkdownRemark(filter: {frontmatter: {template: {eq: "post"}}}, sort: {order: ASC, fields: [frontmatter___date]}){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
            draft
          }
        }
      }
    }
  }
`;

export default IndexTemplate;
