import React from 'react';


const INITIAL_STATE = {
  products: ''
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