// Copyright 2021 Dennis Baeckstroem 
import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
min-height: 40px;
background-image: linear-gradient( -76.3deg,  rgba(44,62,100,1) 12.6%, rgba(69,103,150,1) 82.8% );
border-radius: 1px;
border-style: hidden;
border-color: black;
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 25px;
`
const StyledStrong = styled.strong`
text-align: left;
`
// Simple footer component displaying copyright
export default function Footer()
{
    return(
        <StyledDiv>
        <StyledStrong>Copyright &copy; Dennis Bäckström</StyledStrong>
        </StyledDiv>
        );
}