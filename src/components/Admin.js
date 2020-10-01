import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Admin = () => {

  const store = useSelector(state => state);
  const dispatch = useDispatch();

  return (

    <Wrapper>
      <h2>Products</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`;
const WrapperItem = styled.div`
`;