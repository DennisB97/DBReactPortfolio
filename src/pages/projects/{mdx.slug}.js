// Copyright 2021 Dennis Baeckstroem 
import React from 'react';
import Layout from '../../components/Layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import BottomContentLayout from '../../components/BottomContentLayout';

// Project is a dynamic page component
// Shows the mdx file contnet as a project page for each project
const Project = ({data}) => {
return(
    <Layout title={data.page.frontmatter.projectName} mainContent={
        <BottomContentLayout 
        pageTitleName={data.page.frontmatter.title} 
        videoSrcURL={data.page.frontmatter.videoSrcURL}
        videoTitle={data.page.frontmatter.videoTitle}
        carouselImageData={data.slideShow.edges}
        >
        <MDXRenderer>
        {data.page.body}
        </MDXRenderer>
        </BottomContentLayout>
    }/>

    );
}

export default Project;


export const query = graphql`
  query ($id: String, $slug: String) {
   page: mdx(id: {eq: $id}) {
      frontmatter {
        title
        category
        importance
        projectName
        videoSrcURL
        videoTitle
      }
      body
    }

    slideShow: allFile(
      filter: {relativeDirectory: {eq: $slug}}
      sort: {fields: base, order: ASC}
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(
              height: 1920
              width: 1920
              placeholder: BLURRED
              quality: 90
              blurredOptions: {width: 100}
              transformOptions: { fit: CONTAIN}
              backgroundColor: "transparent"
            )
          }
        }
      }
    }
  }
`