import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';


export const Form = () => {
  return (
    <div>
      <FormBlock>
        <InputForm required type="text" placeholder="enter name" />
        <InputForm required type="tel" placeholder="enter phone" />
        <SubmitButton>confirm the order</SubmitButton>
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
cursor:pointer;
padding-left:2rem;
padding-right:2rem;
text-transform:uppercase;
`;



