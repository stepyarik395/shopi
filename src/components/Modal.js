import React from 'react';
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { keyframes } from 'styled-components'

export const Modal = (props) => {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <WrapperModal>
      <ButtonClose onClick={() => {
        dispatch({
          type: "TOGGLE_MODAL"
        })
      }}>close</ButtonClose>
      <div>
        <img src={props.currentprod.image} />
      </div>
      <WrapperRighWtBlock>
        <TitleModal >{props.currentprod.title}</TitleModal >
        <DeckModal>{props.currentprod.description}</DeckModal>
        <ModalPrice>{props.currentprod.price}</ModalPrice>
        <ListSizes>
          {props.currentprod.avalibaleSizes.map((item) => {
            return <li key={item}><input type="checkbox" />{item}</li>
          })}
        </ListSizes>
      </WrapperRighWtBlock>
    </WrapperModal>
  )
}


const TitleModal = styled.h1`
text-transform:uppercase;
color:#fff;
`;
const DeckModal = styled.p`
font-size:2rem;
color:#fff;
`;
const ButtonClose = styled.button`
cursor:pointer;
position:absolute;
right:20px;
`;
const WrapperRighWtBlock = styled.div`
padding-left:2rem;
`;

const opacit = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;
  }
`;
const WrapperModal = styled.div`
animation-fill-mode:forwards;
animation: ${opacit} .6s;
position:absolute;
background-color:rgba(0,0,0,0.7);
display:flex;
width:100%;
height:70vh;
`;

const ModalPrice = styled.span`
color:#fff;
font-size:2rem;
font-weight:bold;
`;
const ListSizes = styled.ul`
list-style-type:none;
&:li{
  color:#fff;
}
`
