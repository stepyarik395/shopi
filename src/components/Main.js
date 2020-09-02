import React from 'react';
import styled from 'styled-components'
import { Card } from "./Card";


export const Main = (props) => {
  return (
    <WrapperMain>
      {props.products.map((products) => {
        return <li key={products._id}>
          <Card
            title={products.title}
            price={products.price}
            size={products.avalibaleSizes}
            src={products.image}
            description={products.description}
          >
          </Card>
        </li>
      })}
    </WrapperMain>
  )
}

const WrapperMain = styled.div`
display:flex;
height:92vh;
`;