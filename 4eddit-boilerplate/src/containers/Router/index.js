import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import CreateUser from "../CreateUser";
import PostList from "../PostList";




const routes = {
  login: "/login",
  createUser: "/createUser",
  postlist: "/postlist",
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.createUser} component={CreateUser} />
        <Route exact path={routes.postlist} component={PostList} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
