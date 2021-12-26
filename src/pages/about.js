// Copyright 2021 Dennis Baeckstroem 
import * as React from "react"
import '../styles/global.css'
import Layout from '../components/Layout'
import BottomContentLayout from "../components/BottomContentLayout"
import {graphql} from "gatsby"


export const pageQuery = graphql`
query{
slideShow: allFile(
    filter: {relativeDirectory: {eq: "aboutme"}}
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
            quality: 100
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

const AboutPage = ({data}) => {
    return(
        <Layout title={"About page"} mainContent={
            <BottomContentLayout
            pageTitleName={"Who am I?"}
            carouselImageData={data.slideShow.edges}
            links={<li><a href="mailto: dennisbackstrom97@gmail.com">Contact me</a></li>}
            >
            <p>
            I am Dennis, 24 years old recent graduate from Kajaani University of Applied Sciences, Finland.
            How I ended up pursuing a career in IT, is probably an easy guess after looking at the picture below of me when I was around five years old.
            I have been interested in computers and gadgets since a little child and I have fond memories of happiness that technology has brought me. 
            Some of my leisure activities are travelling, playing guitar, playing video games and eating good food. Below you can see some pictures of my life.
            </p>
            </BottomContentLayout>
        }/>
    )
    }
    
    export default AboutPage