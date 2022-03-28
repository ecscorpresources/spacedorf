const UserReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PICK":
      return { ...state, [action.payload]: action.pick };
    case "UPDATE_DAY":
      return { ...state, dy: action.payload, numOfDay: action.numOfDay };
    case "CHANGE_START_DAY":
      return { ...state, start: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
