import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Admin = () => {

  const store = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <ul>
      {store.adminarr.map((item, i) => {
        return <WrapperItem key={i}>{item}</WrapperItem>
      })}
    </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display:flex;
justify-content:center;
`;
const WrapperItem = styled.div`
font-size:2rem;
`;
const TotalPrice = styled.span`
`;