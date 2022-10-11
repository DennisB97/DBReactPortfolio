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
     This is my simple portfolio site.
     On this site there is some more information about myself and some of my programming and projects that I have done.
     For now I created this site very basic,
     but I am slowly working on a more refined and graphically interesting page.
     </p>
     </BottomContentLayout>
}/>
)
}

export default IndexPage