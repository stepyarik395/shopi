import React, { useState } from 'react';
import styled from 'styled-components'

export const Header = (props) => {
  const [minnum, setMin] = useState(0);
  const [maxnum, setMax] = useState(30);
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
            min='0'
            max="100"
            value={minnum}
            onChange={(e) => {
              setMin(e.target.value)
            }}
          />
          <label>от {minnum}</label>
        </WrapperSlideinp>
        <WrapperSlideinp>
          <input
            value={maxnum}
            type="range"
            id="volume"
            name="volume"
            min='0'
            max='100'
            onChange={(e) => {
              setMax(e.target.value)
            }} />
          <label>до {maxnum}</label>
        </WrapperSlideinp>
        <button onClick={() => {

          // props.setProducts(props.products.filter(function (product) { return product.price >= minnum && product.price <= maxnum }))
        }}>Применить</button>
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