import React from 'react';
import styled from 'styled-components'
import { Card } from "./Card";
import { Modal } from "./Modal";
import { useSelector } from "react-redux";



export const Main = (props) => {
  const counter = useSelector(state => state);
  return (
    <WrapperMain>
      {counter.modal ? <Modal /> : false}
      <FlexContainer>
        {props.products.map((products) => {
          return <Card
            key={products._id}
            title={products.title}
            price={products.price}
            size={products.avalibaleSizes}
            src={products.image}
            description={products.description}
          >
          </Card>

        })}
      </FlexContainer>
    </WrapperMain>
  )
}

const WrapperMain = styled.div`
height:92vh;
`;
const FlexContainer = styled.div`
display:flex;
justify-content:space-between;
`;