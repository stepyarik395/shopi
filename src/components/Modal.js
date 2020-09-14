import React from 'react';
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { keyframes } from 'styled-components';
import { useSelector } from "react-redux";


export const Modal = (props) => {
  const dispatch = useDispatch();
  const store = useSelector(state => state);

  return (
    <WrapperModal>
      <ButtonClose onClick={() => {
        dispatch({
          type: "TOGGLE__MODAL"
        })
      }}>close</ButtonClose>
      <div>
        <img alt={store.select_prod._id} src={store.select_prod.image} />
      </div>
      <WrapperRighWtBlock>
        <TitleModal >{store.select_prod.title}</TitleModal >
        <DeckModal>{store.select_prod.description}</DeckModal>
        <ModalPrice>{store.select_prod.price}</ModalPrice>
        {store.select_prod.avalibaleSizes.map((item) => {
          return (
            <ListSizes key={item}>
              <li>
                < ChekBox type="checkbox" />
                {item}
              </li>
            </ListSizes>
          )
        })}
        <ButtonModal onClick={() => {
          // props.setcount(props.ordercount + 1)
          dispatch({
            type: "TOGGLE__MODAL"
          })
        }}>Add to Card</ButtonModal>
      </WrapperRighWtBlock>
    </WrapperModal >
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
margin-top:2rem;
list-style-type:none;
li{
  display:flex;
  align-items:center;
  font-size:1.4rem;
  color:#fff;
}
`
const ButtonModal = styled.button`
cursor:pointer;
background-color:lightcoral;
color:#fff;
text-transform:uppercase;
padding-left:2rem;
padding-right:2rem;
padding-top:1.2rem;
padding-bottom:1.2rem;
margin-top:2rem;
border:none;
`;
const ChekBox = styled.input`
margin-right:0.5rem;
margin-bottom:0.5rem;
`;
