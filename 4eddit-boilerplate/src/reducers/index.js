import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import login from "./login";
import posts from "./posts";
import users from "./user";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    login,
    posts,
    users,
    // Outros reducers aqui
  });
