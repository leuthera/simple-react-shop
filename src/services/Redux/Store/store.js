import { createStore } from "redux";
import userReducer from "../Reducers/userReducer";

const store = createStore(userReducer);

export default store;
