import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const store = useSelector(state => state);
  return (
    <WrapperSidebar >
      {store.bucketitems.map((product, item) => {
        return <div key={item}>
          <h2>{product.title}</h2>
          <h3>{product.description}</h3>
        </div>
      })}
      <span>TOTAL PRICE - ${store.totalprice} </span>
      <button>CALL FORM</button>
    </WrapperSidebar>
  )
}
const WrapperSidebar = styled.div`
/* display:none; */
width:40%;
background-color: lightgoldenrodyellow;
`
