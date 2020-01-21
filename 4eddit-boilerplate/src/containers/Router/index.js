import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import CreateUser from "../CreateUser";
import PostList from "../PostList";
import PostCreate from "../PostCreate";




const routes = {
  login: "/login",
  createUser: "/createUser",
  postlist: "/postlist",
  createpost: "/createpost",
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.createUser} component={CreateUser} />
        <Route exact path={routes.postlist} component={PostList} />
        <Route exact path={routes.createpost} component={PostCreate} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
