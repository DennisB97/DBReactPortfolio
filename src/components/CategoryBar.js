// Copyright 2021 Dennis Baeckstroem 
import React from 'react';
import styled from 'styled-components';
import CategoryTab from './CategoryTab';

const StyledDiv = styled.div`
display: flex;
flex-direction: row;
width: 100%;
background-color: transparent;
height: 50px;
align-items: end;
`

export class ECategories 
{
    static cplusplus = new ECategories("C++")
    static csharp = new ECategories("C#")
    static js = new ECategories("JS")
    static other = new ECategories("Other")
    static misc = new ECategories("Misc")
    
    getName() {return this.name;}

    constructor(name) {
      this.name = name
    }

}

export const findEqCategory = (name) =>
{
    switch(name)
    {
      case "C++":
        {
          return ECategories.cplusplus;
        }
      case "C#":
        {
          return ECategories.csharp;
        }
      case "JS":
        {
          return ECategories.js;
        }
      case "Other":
        {
          return ECategories.other;
        }
      case "Misc":
        {
          return ECategories.misc;
        }

    }

}


// CategoryBar contains all the tabs for different categories
// Forwards the activecategory and a setcategory hook to the tab for changing the category
export const CategoryBar = (props) =>
{
return(
    <StyledDiv>
    <CategoryTab setCategory={props.setCategory} activeCategory={props.activeCategory} categoryType={ECategories.cplusplus}></CategoryTab>
    <CategoryTab setCategory={props.setCategory} activeCategory={props.activeCategory} categoryType={ECategories.csharp}></CategoryTab>
    <CategoryTab setCategory={props.setCategory} activeCategory={props.activeCategory} categoryType={ECategories.js}></CategoryTab>
    <CategoryTab setCategory={props.setCategory} activeCategory={props.activeCategory} categoryType={ECategories.other}></CategoryTab>
    <CategoryTab setCategory={props.setCategory} activeCategory={props.activeCategory} categoryType={ECategories.misc}></CategoryTab>
    </StyledDiv>
    );
}