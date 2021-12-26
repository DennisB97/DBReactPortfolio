// Copyright 2021 Dennis Baeckstroem 
import React from 'react';
import {createGlobalStyle} from "styled-components";
import SideMenu from "./HamburgerMenu.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import * as styles from '../styles/layout.module.css';
import {Helmet} from "react-helmet";

const Global = createGlobalStyle`
body,html{
    margin: 0;
    padding: 0;
    height: 100%;
    min-height: 100vh;
    overflow:hidden;
}
`
// The only main layout used on this site
// divided into a top bar and bottom content area
// Uses gatbsy helmet to set title and lang of page
export default function Layout(props) {
return (
<div className={styles.mainBody}>
<Helmet
  title={props.title}
  htmlAttributes={{
    lang: 'en',
    }}
    />
<Global/>
<div className={styles.column}>
<div className={styles.topBar}>
	<SideMenu/>
	<Navbar/>
	</div>
<div className={styles.bottomContent}>{props.mainContent}</div>
</div>
<Footer/>
</div>

)
}

