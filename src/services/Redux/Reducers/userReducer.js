const initialUserState = [
  {
    firstName: "Harald",
    lastName: "Schmidt",
    age: 38
  }
];

function userReducer(state = initialUserState, action) {
  if (action.type === "ADD_USER") {
    return [...state, action.payload];
  }
  return state;
}

export default userReducer;
