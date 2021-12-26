// Copyright 2021 Dennis Baeckstroem 
import React from 'react'
import styled from "styled-components"
import { navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const ProjectImageButton = styled.button`
position: relative;
display: flex;
flex-direction: column;
width: 250px;
height: 230px;
margin: 25px;
padding: 0px;
border-color: black;
border-width: 3px;
background-image: linear-gradient( -76.3deg,  rgba(44,62,100,1) 12.6%, rgba(69,103,150,1) 82.8% );
cursor: pointer;
z-index: 0;

:hover {
  background-image: linear-gradient( 134.6deg,  rgba(201,37,107,1) 15.4%, rgba(116,16,124,1) 74.7% );
}


`
const StyledText = styled.h1`
font-size: 18px;
text-align: center;
margin: auto;
`

// Picture and info box is used in projects page
// As name implies it contains a picture and a text below
// It functions as a button which on click will navigate to project page
export default function PictureAndInfoBox(props){
const image = getImage(props.projectImage)
return(
<ProjectImageButton onClick={() => navigate(`/projects/${props.redirectPage}`)}>
<GatsbyImage backgroundColor={"grey"} image={image} alt={props.projectName} />
<StyledText>{props.projectName}</StyledText>
</ProjectImageButton>
)
}