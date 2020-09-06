import React from 'react';
import styled from 'styled-components';
import { Modal } from "./Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from 'react';



export const Main = (props) => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const [currentcard, setCurentCard] = useState('');

  return (
    <WrapperMain>
      <FlexContainer>
        {store.products.map((product) => {
          return <WrapperArr key={product._id}>
            <a href={'#' + product._id} onClick={() => {
              setCurentCard(product)
              console.log(store.products)
              dispatch({
                type: "TOGGLE_MODAL"
              })
            }}>
              <img alt={product._id} src={product.image} />
            </a>
            <TitleCard>{product.title}</TitleCard>
            <DescText>{product.description}</DescText>
            <Price>{"$" + product.price}</Price>
            <button onClick={() => {
              props.setcount(props.count + 1)
            }}>add to card</button>
          </WrapperArr>
        })}
        {store.modal ? <Modal
          ordercount={props.count}
          setcount={props.setcount}
          currentprod={currentcard} /> : false}
      </FlexContainer>
    </WrapperMain >
  )
}

const WrapperMain = styled.div`
`;
const FlexContainer = styled.div`
padding-top:2rem;
display:flex;
justify-content:space-between;
flex-wrap:wrap;
`;

const WrapperArr = styled.div`
display:flex;
flex-direction:column;
align-items:center;
flex-wrap:wrap;
border:1px solid lightcoral;
`;
const TitleCard = styled.h2`
text-transform:uppercase;
text-align:center;
padding-top:1.2rem;
`;
const Price = styled.span`
text-align:center;
display: block;
font-weight:bold;
font-size:2rem;
`;
const DescText = styled.p`
font-size:2rem;
`;
