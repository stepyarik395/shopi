import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const store = useSelector(state => state);
  return (
    <WrapperSidebar >
      {store.bucketitems.map((product, item) => {
        return <WrapperItem key={item}>
          <TitleProduct>{product.title}</TitleProduct>
          <PriceProducts>${product.price}</PriceProducts>
        </WrapperItem>

      })}
      <WrapperFooter>
        <TotalText>TOTAL PRICE - ${store.totalprice} </TotalText>
        <ButtonSide>CALL FORM</ButtonSide>
      </WrapperFooter>
    </WrapperSidebar>
  )
}
const WrapperItem = styled.div`
padding-top:1rem;
display:flex;
justify-content:space-around;
align-items:center;
`;
const WrapperSidebar = styled.div`
color:#fff;
right:0;
height:93vh;
position:absolute;
width:20%;
background-color:#525252;
`
const TitleProduct = styled.h2`
font-size:2rem;
`;
const PriceProducts = styled.p`
font-weight:bold;
font-size:2rem;
`;
const TotalText = styled.span`
display:block;
font-size:2rem;
`;
const ButtonSide = styled.button`
cursor:pointer;
`
const WrapperFooter = styled.div`
padding-top:2rem;
justify-content:space-around;
display:flex;
`;
