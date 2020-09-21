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
            < AddproductButton onClick={(e) => {
              dispatch({
                type: "BUCKET__ITEM",
                payload: product,
              })
            }}>add to card</ AddproductButton>
          </WrapperArr>
        })
        }
        {store.modal ? <Modal /> : false}
      </FlexContainer>
      {store.sidebar ? <Sidebar /> : false}
    </WrapperMain >

  )
}

const WrapperMain = styled.div`
display:flex;
justify-content:center;
`;
const FlexContainer = styled.div`
display:flex;
width:1200px;
justify-content:space-around;
flex-wrap:wrap;
`;
const WrapperArr = styled.div`
margin-top:2rem;
margin-bottom:2rem;
padding-bottom:2rem;
width:25%;
display:flex;
flex-direction:column;
align-items:center;
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
const AddproductButton = styled.button`
cursor:pointer;
text-transform:uppercase;
font-size:1.5rem;
`;
