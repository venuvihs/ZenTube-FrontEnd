import SearchPage from "./Pages/SearchPage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Result from "./Pages/Result";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>


        <Route path="/result" exact>
          <Result />
        </Route>

        <Route path="/search" exact>
          <SearchPage />
        </Route>

        <Route path="/login" exact>
          <SignIn />
        </Route>

        <Route path="/signup" exact>
          <SignUp />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
