import { combineReducers } from "redux";

import postReducer from "./postReducer"
import categoriesReducer from "./categoriesReducer"

const rootReducer = combineReducers ({postReducer,categoriesReducer});
export default rootReducer