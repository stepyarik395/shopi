import React from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { keyframes } from 'styled-components';
import { useSelector } from "react-redux";

export const Modal = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state);

  return (
    <WrapperModal>
      <ButtonClose onClick={() => {
        dispatch({
          type: "CLOSE__MODAL"
        })
      }}>X</ButtonClose>
      <ImgModal>
        <img alt={store.select_prod._id} src={store.select_prod.image} />
      </ImgModal>
      <WrapperRighWtBlock>
        <TitleModal>{store.select_prod.title}</TitleModal >
        <DeckModal>{store.select_prod.description}</DeckModal>
        <br />
        <ModalPrice> Price ${store.select_prod.price}</ModalPrice>
        <br />
        <TextSizes>Sizes</TextSizes>
        <ListSizes>
          {store.select_prod.avalibaleSizes.map((item, index) => {
            return (
              <li key={item}>
                <Size>
                  {item}
                </Size>
              </li>
            )
          })}
        </ListSizes>
        <ButtonModal onClick={() => {
          dispatch({
            type: "MODAL__ADD__BUCKET"
          })
        }}>Add to Card</ButtonModal>
      </WrapperRighWtBlock>
    </WrapperModal >
  )
}

const pop = keyframes`
50% {
  transform: scale(.8);
}

100% {
  transform: scale(1);
}
`

const TextSizes = styled.p`
color:#fff;
font-size:2rem;
font-family: Arial, Helvetica, sans-serif;
`

const ImgModal = styled.div`
img{
  margin-left:2rem;
}

`
const TitleModal = styled.h1`
font-family: Arial, Helvetica, sans-serif;
text-transform:uppercase;
color:#fff;
`;
const DeckModal = styled.p`
font-family: Arial, Helvetica, sans-serif;
font-size:2rem;
color:#fff;
`;
const ButtonClose = styled.button`
font-weight:bold;
padding-left:1rem;
padding-top:1rem;
padding-bottom:1rem;
padding-right:1rem;
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
padding-top:2rem;
top:10%;
width:100%;
height:50vh;
`;

const ModalPrice = styled.span`
display:block;
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
font-family: Arial, Helvetica, sans-serif;
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
&:hover{
  animation-name: ${pop};
		animation-duration: 1s;
		animation-timing-function: linear;
		animation-iteration-count: 1;
}
`;
const Size = styled.span`
  text-shadow: 1px 1px 2px black, 0 0 1em white;
font-family: Arial, Helvetica, sans-serif;
font-size:2rem;
display:block;
margin-right:0.5rem;
margin-bottom:0.5rem;
`;
