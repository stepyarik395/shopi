import React from 'react';
import styled from 'styled-components';

export const Signup = () => {
  return (
    <WrapperContainer>
      <Form>
        <Title>Create account</Title>
        <Field required
          type="text"
          placeholder="enter name" />
        <Field
          required
          type="email"
          placeholder="enter email" />
        <Field
          required
          type="password"
          placeholder="enter password" />
        <Button>Sign up</Button>
      </Form>
    </WrapperContainer>
  )
}

const Form = styled.form`
text-align:center;
width:40%;
`;
const WrapperContainer = styled.div`
height:70vh;
display:flex;
justify-content:center;
align-items:center;
`;

const Field = styled.input`
font-size:2.5rem;
margin-top:2rem;
padding:1.2rem 1rem 1.2rem 1rem;
width:100%;
box-sizing:border-box;
font-family: Arial, Helvetica, sans-serif;
`;
const Button = styled.button`
cursor:pointer;
padding-top:1rem;
padding-bottom:1rem;
margin-top:2rem;
font-size:2.5rem;
font-family: Arial, Helvetica, sans-serif;
width:100%;
`;
const Title = styled.h2`
font-size:3rem;
font-family: Arial, Helvetica, sans-serif;
`;