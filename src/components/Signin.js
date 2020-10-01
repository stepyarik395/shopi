import React from 'react';
import styled from 'styled-components';




export const Signin = () => {
  return (
    <div>
      <Title>Sign in</Title>
      <form onSubmit>
        <Field required type="text" />
        <Field required type="password" />
        <button>Sign in</button>
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