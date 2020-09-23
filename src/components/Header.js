import React from 'react';
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { keyframes } from 'styled-components';

export const Header = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <HeaderWrapper>
      <WrapperLinks>
        <Link href='#'>logo</Link>
        <Link href=''>Admin</Link>
        <WrapperSlideinp>
          <SpanText>цена от</SpanText>
          <select value={store.minprice} onChange={(e) => {
            dispatch({
              type: "MIN__COUNT",
              payload: e.target.value
            })
          }}>
            <option value='0'>0</option>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='30'>30</option>
            <option value='40'>40</option>
            <option value='50'>50</option>
            <option value='60'>60</option>
            <option value='70'>70</option>
            <option value='80'>80</option>
            <option value='90'>90</option>
            <option value='100'>100</option>
          </select>
        </WrapperSlideinp>
        <WrapperSlideinp>
          <SpanText>цена до</SpanText>
          <select value={store.maxprice} onChange={(e) => {
            dispatch({
              type: "MAX__COUNT",
              payload: e.target.value
            })
          }}>
            <option value='0'>0</option>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='30'>30</option>
            <option value='40'>40</option>
            <option value='50'>50</option>
            <option value='60'>60</option>
            <option value='70'>70</option>
            <option value='80'>80</option>
            <option value='90'>90</option>
            <option value='100'>100</option>
          </select>
        </WrapperSlideinp>
        <SelectBlock>
          <option>Самые новые</option>
          <option>От низкой цены</option>
          <option>От высокой цены</option>
        </SelectBlock>
        {store.bucket ? <BucketButton href="#" onClick={() => {
          dispatch({
            type: "SIDE__TOGLE"
          })
        }}>|||</BucketButton> : false}

        <NumberBucket>{store.ordercount}</NumberBucket>
      </WrapperLinks>
    </HeaderWrapper >
  )
}
const HeaderWrapper = styled.div`
background-color:#e3e3e3;
`;
const WrapperLinks = styled.div`
height:6vh;
display:flex;
justify-content:space-around;
align-items:center;
`
const Link = styled.a`
text-transform:uppercase;
font-size: 2rem;
display:block;
color:black;
text-decoration:none;
`
const NumberBucket = styled.span`
font-size:2rem;
`;
const SelectBlock = styled.select`
`;
const WrapperSlideinp = styled.div`
display:flex;
align-items:center;
`;
const SpanText = styled.span`
font-size:2rem;
`;
const grow = keyframes`
  from {
    box-shadow: 0 0 3px rgba(0,0,0,0.1);
    transform: rotate(0deg);
  }

  to {
    box-shadow: 0 0 5px rgba(0,0,0,0.4);
    right:40px;
    transform: rotate(360deg);
  }
`;
const BucketButton = styled.button`
right:-100px;
position:absolute;
font-weight:bold;
align-items:center;
justify-content:center;
display:flex;
cursor:pointer;
min-width:40px;
min-height:40px;
border:none;
border-radius:50%;
animation:${grow} 1s;
animation-fill-mode: forwards;
&:focus{
outline:none;
}
&:active{
border:2px solid lightgrey;
outline:none;
}
`;

