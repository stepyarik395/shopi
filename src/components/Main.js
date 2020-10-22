import React from 'react';
import styled from 'styled-components';
import { Modal } from "./Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Sidebar } from '../components/Sidebar'

export const Main = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  console.log(store.adminarr);
  return (
    <GlobalContainer>
      {store.sidebar ? <Sidebar /> : false}
      <WrapperMain>
        <FlexContainer>
          {store.mainproducts.filter(product => product.price >= store.minprice && product.price <= store.maxprice).map((product) => {
            return <WrapperArr key={product._id}>
              <ImageProduct onClick={(e) => {
                dispatch({
                  type: "OPEN__MODAL",
                  payload: product
                })
              }} alt={product._id} src={product.image} />
              <TitleCard>{product.title}</TitleCard>
              <DescText>{product.description}</DescText>
              <Price>{"$" + product.price}</Price>
              <AddproductButton onClick={(e) => {
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
      </WrapperMain >
    </GlobalContainer>
  )
}
const ImageProduct = styled.img`
width:100%;
cursor:pointer;
`;

const GlobalContainer = styled.div`
position:relative;
`;
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
border:1px solid #cfcfcf;
`;
const TitleCard = styled.h2`
font-family: Arial, Helvetica, sans-serif;
text-transform:uppercase;
text-align:center;
padding-top:1.2rem;
`;
const Price = styled.span`
padding-top:1.5rem;
font-family: Arial, Helvetica, sans-serif;
text-align:center;
display: block;
font-weight:bold;
font-size:2rem;
`;
const DescText = styled.p`
text-align:center;
padding-top:2rem;
font-family: Arial, Helvetica, sans-serif;
font-size:2rem;
`;
const AddproductButton = styled.button`
font-weight:bold;
border-radius:10px;
border:2px solid #858585;
padding:1rem 1rem 1rem 1rem;
margin-top:1.5rem;
font-family: Arial, Helvetica, sans-serif;
cursor:pointer;
text-transform:uppercase;
font-size:1.5rem;
&:active{
  outline:none;
}
&:focus{
  outline:none;
}
`