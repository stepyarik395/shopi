
const INITIAL_STATE = {
  modal: false,
  countbucket: 0,
  select_prod: []
}
// console.log(select_prod)

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return {
        modal: !state.modal,
        select_prod: action.payload
      };
    case "COUNT__BUCKET":
      return {
        countbucket: state.countbucket + 1
      };
    case "SELECT__PRODUCT":
      return {
        selectproduct: state.countbucket + 1
      };
    default:
      return state;
  }
}

export default reducer;