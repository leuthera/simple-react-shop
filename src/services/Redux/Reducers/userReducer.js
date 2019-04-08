const initialUserState = [
  {
    firstName: "Harald",
    lastName: "Schmidt",
    age: 38
  }
];

function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    default:
      return state;
  }
}

export default userReducer;
