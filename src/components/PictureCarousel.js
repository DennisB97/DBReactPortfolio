// Copyright 2021 Dennis Baeckstroem 
import React from 'react'
import {GatsbyImage} from "gatsby-plugin-image"
import Carousel from 'react-bootstrap/Carousel'

// PictureCarousel uses the react bootstrap carousel
// receives the pictures as prop edges
const PictureCarousel = ({edges = []}) => {
    return(
        <div style={{maxWidth: '800px'}}>
        <Carousel interval={null}  variant="dark">
{edges.map(({node}) => (
<Carousel.Item key={node.id}>
<div style={{display: 'block', margin: 'auto'}}>
<GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base.split('.')[0]} />
</div>
</Carousel.Item>
))}
        </Carousel>
        </div>
    )
    }
    
export default PictureCarousel