import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Admin = () => {

  const store = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {store.adminarr.map((item, i) => {
        return <WrapperItem key={i}>{item.title}</WrapperItem>
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
`;
const WrapperItem = styled.div`
display:flex;
font-size:2rem;
`;
const TotalPrice = styled.span`
`;