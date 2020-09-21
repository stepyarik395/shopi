import React from 'react';
import styled from 'styled-components';
import { Modal } from "./Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Sidebar } from '../components/Sidebar'

export const Main = (props) => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <WrapperMain>
      <FlexContainer>
        {props.products.filter(product => product.price >= store.minprice && product.price <= store.maxprice).map((product) => {
          return <WrapperArr key={product._id}>
            <a href={'#' + product._id} onClick={(e) => {
              dispatch({
                type: "OPEN__MODAL",
                payload: product
              })
            }}>
              <img alt={product._id} src={product.image} />
            </a>
            <TitleCard>{product.title}</TitleCard>
            <DescText>{product.description}</DescText>
            <Price>{"$" + product.price}</Price>
            <button onClick={(e) => {
              dispatch({
                type: "BUCKET__ITEM",
                payload: product,
              })
            }}>add to card</button>
          </WrapperArr>
        })
        }
        {store.modal ? <Modal /> : false}
      </FlexContainer>
      <Sidebar></Sidebar>
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
