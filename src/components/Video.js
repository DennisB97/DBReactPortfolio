// Copyright 2021 Dennis Baeckstroem 
import React from "react"
import {breakpoints} from "../utils/breakpoints.js"
import styled from "styled-components"

const StyledIframe = styled.iframe`
border: 0;
position: relative;
height: ${({bContainsVideo}) => bContainsVideo ? "300px" : "0px"};
width: ${({bContainsVideo}) => bContainsVideo ? "100%" : "0px"};

@media ${breakpoints.md}{
    width: ${({bContainsVideo}) => bContainsVideo ? "800px" : "0px"};
    height: ${({bContainsVideo}) => bContainsVideo ? "400px" : "0px"};
}

`
const VideoFrame = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
background: none;
margin: 0px;
padding: 0px;

width: 100%;
@media ${breakpoints.md}{
    width: 800px;
}

`
const StyledText = styled.p`
font-size: 25px;
margin: 10px;
padding: 10px;
text-align: left;
`
// Video component is a custom iframe component for embedded videos to be displayed
const Video = ({ videoSrcURL, videoTitle, aboutVideoText, ...props }) => {
var bContainsVideo = false;
return (
  <VideoFrame className="video">
    {bContainsVideo = videoSrcURL.length > 0 ? true : false}
    <StyledIframe bContainsVideo={bContainsVideo}
      
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      Width="100%"
      Height="100%"
    />
    <StyledText>
    {aboutVideoText}
    </StyledText>
  </VideoFrame>
)
}
export default Video