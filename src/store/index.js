import {createStore} from "redux";
import {clubReducer} from "./clubReducer";
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(clubReducer, composeWithDevTools())