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
        }}>BY</ButtonSide>
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
const pulse = keyframes`
0%{
  box-shadow: 0 0 10px rgba(255,255,255,0.1);
}
100%{
  box-shadow: 0 0 25px rgba(255,255,255,0.4);
}
`
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
font-family: Arial, Helvetica, sans-serif;
font-size:2rem;
`;
const PriceProducts = styled.p`
font-family: Arial, Helvetica, sans-serif;
font-weight:bold;
font-size:2rem;
`;
const TotalText = styled.span`
font-family: Arial, Helvetica, sans-serif;
display:block;
font-size:2rem;
`;
const ButtonSide = styled.button`
font-family: Arial, Helvetica, sans-serif;
animation:${pulse} 1s infinite;
color:#fff;
width:40px;
height:40px;
background:transparent;
border:1px solid white;
border-radius:50%;
box-shadow: 0 0 10px rgba(255,255,255,0.4);
cursor:pointer;
&:active{
  outline:none;
}
&:focus{
  outline:none;
}
`
const WrapperFooter = styled.div`
padding-top:2rem;
justify-content:space-around;
align-items:center;
display:flex;
`;

