import React from 'react';
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Modal = (props) => {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <WrapperModal>
      <button onClick={() => {
        dispatch({
          type: "TOGGLE_MODAL"
        })
      }}>close</button>
      <img src={props.currentprod.image} />
      <h1>{props.currentprod.title}</h1>
      <p>{props.currentprod.description}</p>
    </WrapperModal>
  )
}

const WrapperModal = styled.div`
position:absolute;
background-color:gray;
width:100%;
height:100vh;
`;