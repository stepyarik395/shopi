
import data from '../data.json'

const INITIAL_STATE = {
  modal: false,
  countbucket: 0,
  products: data.products

}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return {
        modal: !state.modal,
        products: state.products
      };
    case "COUNT__BUCKET":
      return {
        countbucket: state.countbucket + 1
      };
    case "PRICE__SORT":
      return {
        products: data.products.filter(products => products.price > 30)
      };
    default:
      return state;
  }
}

export default reducer;