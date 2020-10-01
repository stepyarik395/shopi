import data from '../data.json'

const INITIAL_STATE = {
  modal: false,
  sidebar: false,
  bucket: false,
  form: false,
  mainproducts: data.products,
  countbucket: 0,
  select_prod: [],
  bucketitems: [],
  minprice: 0,
  maxprice: 30,
  totalprice: 0,
  ordercount: 0,
  username: '',
  useremail: ''
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "OPEN__MODAL":
      return {
        ...state,
        modal: !state.modal,
        select_prod: action.payload,
      };
    case "BUCKET__ITEM":
      return {
        ...state,
        bucket: true,
        totalprice: state.totalprice += action.payload.price,
        ordercount: state.ordercount + 1,
        bucketitems: state.bucketitems.concat(action.payload)
      };
    case "MODAL__ADD__BUCKET":
      return {
        ...state,
        bucket: true,
        modal: !state.modal,
        totalprice: state.totalprice += state.select_prod.price,
        ordercount: state.ordercount + 1,
        bucketitems: state.bucketitems.concat(state.select_prod)
      };
    case "COUNT__ORDER":
      return {
        ...state,
        ordercount: state.ordercount + 1
      };
    case "MIN__COUNT":
      return {
        ...state,
        minprice: action.payload
      };
    case "MAX__COUNT":
      return {
        ...state,
        maxprice: action.payload
      };
    case "SIDE__TOGLE":
      return {
        ...state,
        sidebar: !state.sidebar
      };
    case "TOGGLE__FORM":
      return {
        ...state,
        form: !state.form
      };
    case "CLOSE__MODAL":
      return {
        ...state,
        modal: !state.modal
      };
    case "ADD__USER__NAME":
      return {
        ...state,
        username: action.payload
      };
    case "ADD__USER__PASSWORD":
      return {
        ...state,
        password: action.payload
      };
    default:
      return state;
  }
}

export default reducer;