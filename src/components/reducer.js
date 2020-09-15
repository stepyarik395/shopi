
const INITIAL_STATE = {
  modal: false,
  countbucket: 0,
  select_prod: [],
  bucketitems: []
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
    case "MODAL__ADD__BUCKET":
      return {
      };
    default:
      return state;
  }
}

export default reducer;