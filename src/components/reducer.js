
const INITIAL_STATE = {
  modal: false,
  countbucket: 0

}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return {
        modal: !state.modal
      };
    case "COUNT__BUCKET":
      return {
        countbucket: state.countbucket + 1
      };
    default:
      return state;
  }
}

export default reducer;