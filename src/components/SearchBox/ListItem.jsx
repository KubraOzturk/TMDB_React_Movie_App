import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const ListContainer=styled.div`
display: flex;
  padding: 8px;
  border-bottom: 1px solid #e6e6e6;
`
const ListRight=styled.div`
flex: 0.2;
`;
const RightP=styled.p`
font-size: 32px;
color: #000;`

const ListLeft=styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;
const Center=styled.div`
flex: 4;
`

const Thumbnail=styled.img`
width: 50px;
`;
const CenterHead=styled.h4`
margin-block-start: 0px;
margin-block-end: 8px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const CenterPar=styled.p`
margin-block-start: 0px;
margin-block-end: 8px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const Head=styled.h4`
font-weight: 600;
`;
const Paragraph=styled.p`
color: #a1a1a1;
`
const ListItem = ({ id,title, caption, imageUrl }) => {
  return (
    <ListContainer>
      <ListLeft>
        <Thumbnail src={imageUrl} />
      </ListLeft>
      <Center>
        <CenterHead>{title}</CenterHead>
        <CenterPar>{caption}</CenterPar>
      </Center>
     <ListRight>
     <Link to={`/detail/${id} `} style={{ color: '#323232',textDecoration: 'none' }}> <RightP>&#8250;</RightP></Link>
      </ListRight>     
    </ListContainer>
  );
};

export default ListItem;
