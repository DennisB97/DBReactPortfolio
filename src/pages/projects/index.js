// Copyright 2021 Dennis Baeckstroem 
import React , { useState ,useEffect} from "react"
import '../../styles/global.css'
import * as styles from '../../styles/projects.module.css'
import Layout from '../../components/Layout'
import PictureAndInfoBox from '../../components/PictureAndInfoBox'
import { graphql } from "gatsby"
import {CategoryBar,ECategories,findEqCategory} from "../../components/CategoryBar";

// ProjectsPage is where all projects are shown
// contains the state for current category, and it also tries to load from sessionstorage the last category browsed
const ProjectsPage = ({data}) => {
    
  var savedCategory = sessionStorage.getItem('currentCategory');
  var initialCategory = ECategories.cplusplus;
  if(savedCategory !== null)
  {
    initialCategory = findEqCategory(savedCategory);
  }

  const[currentCategory,setCategory] = useState(initialCategory);
    useEffect(() => {
      sessionStorage.setItem('currentCategory',currentCategory.getName());
    }, [currentCategory]);

    
    var sortedProjects = [];
    data.allMdx.nodes.forEach(node => {
      if(node.frontmatter.category.includes(currentCategory.getName()))
      {
        sortedProjects.push(node);
      }
    });

    return(
    <Layout title={"Projects page"} mainContent={
        <div className={styles.mainBox}>
        <CategoryBar setCategory={setCategory} activeCategory={currentCategory}/>
        <div className={styles.projectsHolder}>
        {sortedProjects.map(node => (
          <PictureAndInfoBox 
          key={node.slug + node.frontmatter.title}
          redirectPage={node.slug}
          projectImage={node.frontmatter.thumbnailImage}
          projectName={node.frontmatter.projectName}
          />
        ))}
        </div>
        </div>




        
    }/>
    )
    }
    
    export default ProjectsPage

    export const query = graphql`
    query {
      allMdx(sort: {fields: frontmatter___importance, order: ASC}) {
        nodes {
          frontmatter {
            title
            category
            importance
            projectName
            thumbnailImage {
            childImageSharp {
                gatsbyImageData(
                   width: 250
                   height: 150
                   placeholder: BLURRED
                   quality: 90
                   formats: [AUTO, WEBP, AVIF]
                   blurredOptions: {width: 100}
                )
               }
            }
          }
          id
          slug
        }
      }
    }
`

    