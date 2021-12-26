// Copyright 2021 Dennis Baeckstroem 
import React from 'react'
import styled from "styled-components"
import Video from "../components/Video"
import PictureCarousel from "../components/PictureCarousel"
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledTitle = styled.b`
font-size: 40px;
margin: 0px;
padding-top: 20px;
margin: 20px;
max-width: 1200px;
`

const MainBox = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items: center;
align-content: center;
align-self: center;
padding: 0px;
width: 100%;
height: 100%;
background: transparent;
overflow-y: auto;
overflow-x: hidden;
`
const StyledAboutText = styled.div`
font-size: 25px;
margin: 10px;
padding: 10px;
text-align: left;
max-width: 800px;

`

const StyledLinks = styled.nav`
background: none;
position: relative;
max-width: 600px;
align-self: center;
text-align: left;
display: flex;
flex-direction: row;

ul{
list-style-type: none;
font-style: normal;
font-size: 20px;
padding-left: 20px;
display: flex;
flex-direction: row;
}

li{
    margin-left: 15px;
    a:link {text-decoration: none; color:#278eff;}
    a:visited { text-decoration: none; color:#278eff; }
    a:hover { text-decoration: none; color:#c9256b; }
    a:focus { text-decoration: none; color:#278eff; }
    a:active { text-decoration: none; color:#278eff; }
}

a{
    text-decoration: none;
}

`
// The bottomcontentlayout provides an inner layout within the layout components bottom content area
// It can contain a title, children used mainly for paragraph and mdx body content
// also a picture carousel if pictures provided and a embedded video
const BottomContentLayout = (props) => {
    var carouselImages = [];
    carouselImages = props.carouselImageData;

    var video = props.videoSrcURL !== undefined ? <Video videoSrcURL={props.videoSrcURL}
    videoTitle={props.videoTitle} aboutVideoText={props.aboutVideoText}/> 
    : null;

    return(
    <MainBox>
    <StyledTitle>{props.pageTitleName}</StyledTitle>
        {video}
        <StyledAboutText>
        {props.children}
        </StyledAboutText>
        <PictureCarousel 
        edges={carouselImages}
        />
         <StyledLinks>
            <ul>
            {props.links} 
            </ul>
        </StyledLinks>
    </MainBox>
    )
    }
    
export default BottomContentLayout