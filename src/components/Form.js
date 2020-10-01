import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export const Form = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(store.username);
  console.log(store.password);
  return (
    <div>
      <FormBlock>
        <InputForm
          required type="text"
          onChange={(e) => {
            dispatch({
              type: "ADD__USER__NAME",
              payload: e.target.value
            })
          }} placeholder="enter name" />
        <InputForm
          required
          type="tel"
          placeholder="enter phone"
          onChange={(e) => {
            dispatch({
              type: "ADD__USER__PASSWORD",
              payload: e.target.value
            })
          }} />
        <SubmitButton onClick={() => {
        }}>confirm the order</SubmitButton>
      </FormBlock>
    </div>
  )
}
const tmp = keyframes`
0%{
  opacity:0;
  width:50%;
}
100%{
  opacity:1;
  width:80%;
}
`
const InputForm = styled.input`
font-family: Arial, Helvetica, sans-serif;
position:relative;
margin:2rem;
display:block;
width:50%;
height:3vh;
padding-left:10px;
box-sizing:border-box;
animation:${tmp} 1s;
animation-fill-mode:forwards;
`;
const FormBlock = styled.form`
display:flex;
flex-direction:column;
align-items:center;
`;
const SubmitButton = styled.button`
font-family: Arial, Helvetica, sans-serif;
cursor:pointer;
padding-left:2rem;
padding-right:2rem;
text-transform:uppercase;
`;



