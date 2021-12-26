// Copyright 2021 Dennis Baeckstroem 
import {Link} from 'gatsby'
import React from 'react'
import {breakpoints} from "../utils/breakpoints.js"
import styled from "styled-components"

const StyledNav = styled.nav`
display: flex;
flex-direction: row;
justify-content: top;
align-items: center;
background: none;
position: relative;

visibility: hidden;
@media ${breakpoints.md}{
    visibility: visible;
}



ul{
list-style-type: none;
margin: 0;
padding: 0px;
font-style: normal;
font-size: 20px;
display: flex;
flex-direction: row;

}

li{
    padding-left: 20px;
    

    a:link {text-decoration: none; color:black;}
    a:visited { text-decoration: none; color:black; }
    a:hover { text-decoration: none; color:#c9256b; }
    a:focus { text-decoration: none; color:black; }
    a:active { text-decoration: none; color:black }

}

a{
    text-decoration: none;
    
}

`

// Top page navbar
// contains couple page links nothing else
export default function Navbar() {
return (
<StyledNav>
<div>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about/">About me</Link>
            </li>
            <li>
                <Link to="/projects/">Projects</Link>
            </li>
            </ul>
            </div>
</StyledNav>
)
}