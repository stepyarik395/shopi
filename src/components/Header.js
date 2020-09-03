import React from 'react';
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { useState } from 'react';



export const Header = (props) => {
  const store = useSelector(state => state);
  const [minprice, setminPrice] = useState(0)
  const [maxprice, setmaxPrice] = useState(30)
  return (
    <HeaderWrapper>
      <WrapperLinks>
        <Link href='#'>logo</Link>
        <Link href=''>Admin</Link>
        <WrapperSlideinp>
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="100"
            defaultValue={minprice}
            onChange={(e) => {
              setminPrice(e.target.value)
            }}
          />
          <label>от {minprice}</label>
        </WrapperSlideinp>
        <WrapperSlideinp>
          <input type="range" id="volume" name="volume"
            min="0" max="100" onChange={(e) => {
              setmaxPrice(e.target.value)
            }} defaultValue={maxprice} />
          <label>до {maxprice}</label>
        </WrapperSlideinp>
        <button>Применить</button>
        <SelectBlock>
          <option>Сортировать</option>
          <option>оТ низкой цены</option>
          <option>От высокой цены</option>
        </SelectBlock>
        <NumberBucket>{props.count}</NumberBucket>
      </WrapperLinks>
    </HeaderWrapper>
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