import React from 'react';
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export const Main = () => {
  const products = useSelector(state => state);
  const dispatch = useDispatch();

  let arr = () => {
    let newarr = []
    for (let i = 0; i < products.products.products.length; i++) {
      newarr.push(products.products.products[i])
    }
    return newarr
  }

  return (
    <WrapperMain>
      {arr().map((item, i) => {
        return <div key={item}>{item.name}</div>
      })}
    </WrapperMain>
  )
}

const WrapperMain = styled.div`
height:92vh;
`;