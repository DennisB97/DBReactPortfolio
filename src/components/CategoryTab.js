// Copyright 2021 Dennis Baeckstroem 
import React from 'react';
import styled from 'styled-components'


const StyledDiv = styled.button`
width: 100px;
background-color: grey;
height: ${({bActive}) => bActive ? '40px' : '30px'};
border-radius: 15px 15px 0px 0px;
border-color: black;
font-weight: ${({bActive}) => bActive ? 'bold' : 'normal'};


`
// CategoryTab is one category tab, and it receives the category and current active category through props
// if current category is the same as this category then it will be set as active and will get its style adjusted
// Onclick is bound to the hook received to change category
export default function CategoryTab(props)
{
const categoryType = props.categoryType;
const bActive = props.activeCategory === categoryType;
const name = (categoryType !== undefined) ? categoryType.getName() : "";
return(
    <StyledDiv onClick={() => {if(!bActive)props.setCategory(categoryType)}} bActive={bActive}>
    {name}
    </StyledDiv>
    );
}