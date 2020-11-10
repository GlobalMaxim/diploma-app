import React from "react";
import { Redirect, Route,  Switch } from "react-router-dom";
import FirstPage from "./components/FirstPage/FirstPage";
import ThirdPage from './components/ThirdPage/ThirdPage'
import SecondPage from "./components/SecondPage/SecondPage";
import AuthPage from './components/AuthPage/AuthPage'


export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/admin">
          {/* <AdminPage /> */}
        </Route>
        <Redirect to="/admin" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/second-page" component={SecondPage} />
      <Route exact path="/third-page" component={ThirdPage} />
      <Route exact path={["/", "/first-page"]} component={FirstPage} />
      <Route exact path="/auth-page" component={AuthPage} />
      <Redirect to="/first-page" />
    </Switch>
  );
};
