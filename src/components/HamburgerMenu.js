// Copyright 2021 Dennis Baeckstroem 
import React, {useState} from 'react'
import styled from "styled-components"
import { Link } from "gatsby"
import {breakpoints} from "../utils/breakpoints.js"


const MenuIcon = styled.button`
position: relative;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: flex-start;
align-content: flex-start; 
width: 2.0rem;
height: 1.5rem;
border: none;
background: transparent;
cursor: pointer;
top: -7px;
z-index: 5;

visibility: visible;
@media ${breakpoints.md}{
    visibility: hidden;
}

:focus{
    outline: none;
    box-shadow: none;
}

div{
width: 1.5rem;
height: 0.25rem;
background: black;
border-radius: 0px;
transform-origin: 0px;
top: 0px;
margin: 0px;
padding: 0px;
position: relative;
transition: opacity 300ms, transform 300ms;

:first-child{
transform:  ${({bShowMenu}) => bShowMenu ? "translateY(5px) rotate(-25deg)" : "rotate(0)"};
}

:nth-child(2)
{
    width: ${({bShowMenu}) => bShowMenu ? "2.5rem" : "1.5rem"}
}

:nth-child(3){
transform: ${({bShowMenu}) => bShowMenu ? "translateY(-5px) rotate(25deg)" : "rotate(0)"};
}


}
`

const MenuInfo = styled.nav`
display: flex;
flex-direction: column;
justify-content: top;
align-items: center;
text-align: center;
height: 100vh;
width: 40%;
visibility: visible;
@media ${breakpoints.md}{
    width: 15%;
    visibility: hidden;
}
transition: transform 300ms;
background-image: linear-gradient( 76.3deg,  rgba(44,62,100,1) 12.6%, rgba(69,103,150,1) 82.8% );
position: absolute;
top: 0;
left: 0;
transform: ${({bShowMenu}) => (bShowMenu ? "translateX(0)" : "translateX(-200%)")};
z-index: 4;
div{
display: flex;
flex-direction: column;
padding: 0px;
margin: 0px;
padding-top: 35%;

    
}

ul{
list-style-type: none;
margin: 0;
padding: 0px;
font-style: normal;
font-size: 26px;


}

li{
    padding: 20px;
    
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

// The sidemenu appears when the screen width is small enough so it will be rendered instead of navbar
// Contains links to different pages and navigates through gatsby Link component
const SideMenu = () => {
const [bShowMenu,showMenu] = useState(false)
return(
    <>
<MenuIcon bShowMenu={bShowMenu} onClick={() => showMenu(!bShowMenu)}>
    <div />
    <div />
    <div />
</MenuIcon>

<MenuInfo bShowMenu={bShowMenu}>
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
        </MenuInfo>
    </>
    


)
}

export default SideMenu