import React from 'react';
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Header = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(store.ordercount)

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
        <NumberBucket>{store.ordercount}</NumberBucket>
      </WrapperLinks>
    </HeaderWrapper >
  )
}
const HeaderWrapper = styled.div`
background-color:yellow;
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