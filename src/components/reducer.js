import React from 'react';
import data from '../data.json'

const INITIAL_STATE = {
  products: data
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "Car":
      return {
        name: "Bob - car"
      };
    case "Bike":
      return {
        name: "Jasmin - bike"
      };
    default:
      return state;
  }
}

export default reducer;