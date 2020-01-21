import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import login from "./login";
import posts from "./posts";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    login,
    posts,
    // Outros reducers aqui
  });
