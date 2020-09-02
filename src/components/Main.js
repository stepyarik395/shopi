import React from 'react';
import styled from 'styled-components'
import { Modal } from "./Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from 'react';



export const Main = (props) => {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  const [currentcard, setCurentCard] = useState('1231');
  console.log(currentcard)
  return (
    <WrapperMain>
      <FlexContainer>
        {props.products.map((product) => {
          return <WrapperArr key={product._id}>
            <a href={'#' + product._id} onClick={() => {
              setCurentCard(product)
              dispatch({
                type: "TOGGLE_MODAL"
              })
            }}>
              <img src={product.image} />
            </a>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <span>{product.price}</span>
            <button onClick={() => {
            }}>add to card</button>
          </WrapperArr>
        })}
        {counter.modal ? <Modal currentprod={currentcard} /> : false}
      </FlexContainer>
    </WrapperMain >
  )
}

const WrapperMain = styled.div`
height:92vh;
`;
const FlexContainer = styled.div`
display:flex;
justify-content:space-between;
`;

const WrapperArr = styled.div`
border:1px solid lightcoral;
`;