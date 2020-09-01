import React from 'react';
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Card } from "./Card";


export const Main = () => {
  const arrproducts = useSelector(state => state);
  const dispatch = useDispatch();

  let arr = () => {
    let newarr = []
    for (let value of arrproducts.products) {
      newarr.push(value)
    }
    return newarr
  }



  return (
    <WrapperMain>
      {console.log(arr())}
      {arr().map((item, i) => {
        return <Card
          title=""
          key={i}>
          {i}
        </Card>
      })}
    </WrapperMain>
  )
}

const WrapperMain = styled.div`
height:92vh;
`;