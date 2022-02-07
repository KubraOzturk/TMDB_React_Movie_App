import React from "react";
import styled from "styled-components";

 const Cast = styled.div`
    
    display:inline-block;
    white-space:normal;
    margin: 4px;
    vertical-align:middle;
    align-items: center;
    border-radius: 150px;
    width: '8rem'
    `

 const CastDescription = styled.div`
   max-width: 100px;
   font-size: 12px;`

  const GenreButton=styled.button`
  background-color:#F8EFBA;
  background: linear-gradient:#F8EFBA;
  text-color:white;
  border: none;
  & before {
    height: 0%;
    width: 2px;
  }
  & hover {
    box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
                -4px -4px 6px 0 rgba(116, 125, 136, .5), 
      inset -4px -4px 6px 0 rgba(255,255,255,.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
  }
  margin-left:3px;
  border-radius:0.2rem
  `

  const CrewCard = styled.div`
    
  display:inline-block;
  white-space:normal;
  margin: 6px;
  vertical-align:middle;
  align-items: center;
  border-radius: 6px;
  width:13rem;
  height:3rem;
  background-color:#dfe4ea;
  font-size:18px;
  `


 export {CastDescription, Cast,GenreButton,CrewCard}
