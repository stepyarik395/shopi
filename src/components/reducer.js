
const INITIAL_STATE = {
  modal: false,
  countbucket: 0,
  select_prod: [],
  bucketitems: []
}


function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE__MODAL":
      return {
        ...state,
        modal: !state.modal,
        select_prod: action.payload,
      };
    case "COUNT__BUCKET":
      return {
        countbucket: state.countbucket + 1
      };
    case "SELECT__PRODUCT":
      return {
        selectproduct: state.countbucket + 1
      };
    case "BUCKET__ITEM":
      return {
        bucketitems: state.bucketitems.concat(action.payload)
      };
    default:
      return state;
  }
}

export default reducer;