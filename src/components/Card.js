import React from 'react';
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Modal } from "./Modal";

export const Card = (props) => {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>

    </div>
  )
}