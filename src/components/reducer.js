
const INITIAL_STATE = {
  modal: false,
  countbucket: 0,
  select_prod: [],
  bucketitems: [],
  arrsizes: [],
  ordercount: Number(window.localStorage.getItem('count') || 0)
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "OPEN__MODAL":
      return {
        ...state,
        modal: !state.modal,
        select_prod: action.payload,
      };
    case "CLOSE__MODAL":
      return {
        ...state,
        modal: !state.modal
      }
    case "BUCKET__ITEM":
      return {
        ordercount: state.ordercount + 1,
        bucketitems: state.bucketitems.concat(action.payload)
      };
    case "MODAL__ADD__BUCKET":
      return {
        ordercount: state.ordercount + 1,
        bucketitems: state.bucketitems.concat(state.select_prod)
      };
    case "ADD__SIZE":
      return {
        ...state,
        arrsizes: state.arrsizes.concat(action.payload)
      };
    case "DELETE__SIZE":
      return {
        ...state,
        arrsizes: action.payload
      };
    case "COUNT__ORDER":
      return {
        ...state,
        ordercount: state.ordercount + 1
      };
    default:
      return state;
  }
}

export default reducer;