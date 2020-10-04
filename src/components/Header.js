import React from 'react';
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { keyframes } from 'styled-components';
import { Link } from "react-router-dom";

export const Header = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <HeaderWrapper>
      <WrapperLinks>
        <StyledLink to='/'>logo</StyledLink>
        <StyledLink to='/admin'>Admin</StyledLink>
        <StyledLink to="/signin">Sing in</StyledLink>
        <StyledLink to="/signup">Sing up</StyledLink>
        <SortBlock>
          <WrapperSlideinp>
            <SpanText>цена от</SpanText>
            <SelectMenu value={store.minprice} onChange={(e) => {
              dispatch({
                type: "MIN__COUNT",
                payload: e.target.value
              })
            }}>
              <option value='0'>0</option>
              <option value='10'>10</option>
              <option value='20'>20</option>
              <option value='30'>30</option>
              <option value='40'>40</option>
              <option value='50'>50</option>
              <option value='60'>60</option>
              <option value='70'>70</option>
              <option value='80'>80</option>
              <option value='90'>90</option>
              <option value='100'>100</option>
            </SelectMenu>
          </WrapperSlideinp>
          <WrapperSlideinp>
            <SpanText>цена до</SpanText>
            <SelectMenu value={store.maxprice} onChange={(e) => {
              dispatch({
                type: "MAX__COUNT",
                payload: e.target.value
              })
            }}>
              <option value='0'>0</option>
              <option value='10'>10</option>
              <option value='20'>20</option>
              <option value='30'>30</option>
              <option value='40'>40</option>
              <option value='50'>50</option>
              <option value='60'>60</option>
              <option value='70'>70</option>
              <option value='80'>80</option>
              <option value='90'>90</option>
              <option value='100'>100</option>
            </SelectMenu>
          </WrapperSlideinp>

        </SortBlock>
        <WrapperButtonCount>
          {store.bucket ? <WrapperButtonCount>
            <BucketButton
              onClick={() => {
                dispatch({
                  type: "SIDE__TOGLE"
                })
              }}
            >
              |||
            </BucketButton>
            <NumberBucket>
              {store.ordercount}
            </NumberBucket>
          </WrapperButtonCount> : false}
        </WrapperButtonCount>
      </WrapperLinks>
    </HeaderWrapper >
  )
}

const grow = keyframes`
  from {
  }

  to {
    right:40px;
  }
`;
const rotate = keyframes`
from{
  transform:rotate(0deg);
}
to{transform:rotate(360deg)

}
`;
const SortBlock = styled.div`
display:flex;
align-items:center;
margin-left:7rem;
`;
const WrapperButtonCount = styled.div`
display:flex;
align-items:center;
animation:${grow} 1s;
animation-fill-mode: forwards;
right:-100px;
position:absolute;
`;
const SelectMenu = styled.select`
cursor:pointer;
`;
const HeaderWrapper = styled.div`
background-color:#e3e3e3;
`;
const WrapperLinks = styled.div`
height:6vh;
display:flex;
align-items:center;
`
const StyledLink = styled(Link)`
margin-left:2rem;
font-family: Arial, Helvetica, sans-serif;
text-transform:uppercase;
font-size: 2rem;
display:block;
color:black;
text-decoration:none;
`;
const NumberBucket = styled.span`
display:block;
margin-left:15px;
font-size:2rem;
`;
const WrapperSlideinp = styled.div`
margin-left:2rem;
display:flex;
align-items:center;
`;
const SpanText = styled.span`
display:block;
padding-right:15px;
font-family: Arial, Helvetica, sans-serif;
font-size:2rem;
`;
const BucketButton = styled.button`
box-shadow: 0 0 3px rgba(0,0,0,0.1);
font-weight:bold;
align-items:center;
justify-content:center;
animation:${rotate} 1s;
animation-fill-mode:forwards;
display:flex;
cursor:pointer;
min-width:40px;
min-height:40px;
border:none;
border-radius:50%;
&:focus{
outline:none;
}
&:active{
border:2px solid lightgrey;
outline:none;
}
`;

