import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";
import { keyframes } from 'styled-components';
import { Form } from '../components/Form'
import { useDispatch } from "react-redux";


export const Sidebar = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
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
        <ButtonSide onClick={() => {
          dispatch({
            type: "TOGGLE__FORM"
          })
        }}>CALL FORM</ButtonSide>
      </WrapperFooter>
      {store.form ? <Form /> : false}
    </WrapperSidebar>
  )
}
const showsidebar = keyframes`
  0% {
    opacity:0.1;
    right:0
    }
  70%{
    right:80px
    }
  100%{
    opacity:1;
    right:0
  }
`;
const WrapperItem = styled.div`
padding-top:1rem;
display:flex;
justify-content:space-around;
align-items:center;
`;
const WrapperSidebar = styled.div`
animation:${showsidebar} 1s;
animation-fill-mode:forwards;
color:#fff;
right:100px;
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

