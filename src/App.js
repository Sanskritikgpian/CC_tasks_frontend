import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// constants
import { HOME_ROUTE, SIGN_IN_ROUTE, SIGN_UP_ROUTE } from "./constants/routes";
// components
import Loader from "./components/loader/Loader";
// pages
const Home = lazy(() => import("./pages/home/Home"));
const SignIn = lazy(() => import("./pages/signIn/SignIn"));
const SignUp = lazy(() => import("./pages/signUp/SignUp"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={HOME_ROUTE} component={Home} />
          <Route exact path={SIGN_IN_ROUTE} component={SignIn} />
          <Route exact path={SIGN_UP_ROUTE} component={SignUp} />
          <Redirect to={HOME_ROUTE} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
