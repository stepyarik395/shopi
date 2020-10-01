import React from 'react';
import styled from 'styled-components';


export const Signin = () => {
  return (
    <WrapperContainer>
      <Form onSubmit>
        <Title>Sign in</Title>
        <Field required type="text" />
        <Field required type="password" />
        <Button>Sign in</Button>
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
const Title = styled.h2`
font-size:3rem;
font-family: Arial, Helvetica, sans-serif;
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