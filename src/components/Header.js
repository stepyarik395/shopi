import React from 'react';
import styled from 'styled-components'



export const Header = () => {
  return (
    <HeaderWrapper>
      <WrapperLinks>
        <Link href='#'>logo</Link>
        <Link href=''>Admin</Link>
      </WrapperLinks>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
background-color:yellow;

`;

const WrapperLinks = styled.div`
height:4vh;
display:flex;
justify-content:space-around;
align-items:center;
`
const Link = styled.a`
text-transform:uppercase;
font-size: 2rem;
display:block;
color:black;
text-decoration:none;
`