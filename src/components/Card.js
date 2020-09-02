import React from 'react';
import styled from 'styled-components'





export const Card = (props) => {
  return (
    <WrapperCard>
      <Image src={props.src} />
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <Button>add card</Button>
      <PriceText>{props.price}</PriceText>
    </WrapperCard>
  )
}

const WrapperCard = styled.div`
display:flex;
flex-direction:column;
width:40%;
flex-wrap:wrap;
`

const Image = styled.img`
max-width:300px;
`
const Title = styled.h1`
font-size:2rem;
font-weight:bold;
`
const Description = styled.p`
font-size:1.8rem;
`
const Button = styled.button`
outline:none;
cursor:pointer;
background-color:#f76840;
padding-left:1.3rem;
padding-left:1.3rem;
padding-top:0.4rem;
padding-bottom:0.4rem;
`;
const PriceText = styled.span`
font-weight:bold;
font-size:1.4rem;
`