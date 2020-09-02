import React from 'react';
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Card = (props) => {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <WrapperCard>
      <Image src={props.src} />
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <PriceText>{props.price}$</PriceText>
      <Button onClick={() => {
        dispatch({
          type: "TOGGLE_MODAL"
        })
      }}>add card</Button>
    </WrapperCard>
  )
}

const WrapperCard = styled.div`
border:1px solid #494863;
display:flex;
flex-direction:column;
text-align:center;
flex-wrap:wrap;
`
const Image = styled.img`
max-width:300px;
`
const Title = styled.h1`
padding-top:1.3rem;
font-size:2rem;
font-weight:bold;
`
const Description = styled.p`
padding-top:1.3rem;
font-size:1.8rem;
`
const Button = styled.button`
border:none;
outline:none;
cursor:pointer;
background-color:#f76840;
padding-left:1.3rem;
padding-left:1.3rem;
padding-top:0.4rem;
padding-bottom:0.4rem;
`;
const PriceText = styled.span`
padding-bottom:1.2rem;
padding-top:1.3rem;
font-weight:bold;
font-size:1.4rem;
`