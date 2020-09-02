import React from 'react';
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Modal = () => {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <WrapperModal>

      <button onClick={() => {
        dispatch({
          type: "TOGGLE_MODAL"
        })
      }}>close</button>
      <h1>Modal tile</h1>
    </WrapperModal>
  )
}

const WrapperModal = styled.div`
position:absolute;
background-color:gray;
width:100%;
height:100vh;
`;