// Copyright 2021 Dennis Baeckstroem 
import * as React from "react"
import '../styles/global.css'
import Layout from '../components/Layout'
import BottomContentLayout from "../components/BottomContentLayout"

// Main page 
const IndexPage = () => {
return(
  <Layout title={"Home page"} mainContent={
    <BottomContentLayout
    pageTitleName={"Welcome to my site!"}
   >
     <p>
     I created this site to be a portfolio site.
     On this site there is some more information about myself and some of my programming and projects that I have done.
     For now I created this site very basic,
     but perhaps will add more functionality and testing some ideas on here as well when it comes to web development.
     </p>
     </BottomContentLayout>
}/>
)
}

export default IndexPage