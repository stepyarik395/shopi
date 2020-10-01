import React from 'react';
import styled from 'styled-components';

export const Signup = () => {
  return (
    <div>
      <form>
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
        <button>Sign up</button>
      </form>
    </div>
  )
}

const Title = styled.h2`
font-family: Arial, Helvetica, sans-serif;
`;
const Field = styled.input`
font-family: Arial, Helvetica, sans-serif;
`;