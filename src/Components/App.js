import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Login";
import TicketList from "./TicketList";
import Menu from "./GlobalComponents/Menu";
import Head from "./GlobalComponents/Head";

const store = configureStore();

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Provider store={store}>
          <Route path="/" component={Head} />
          <Route path="/" component={Menu} />
          <Route exact path="/" component={TicketList} />
        </Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
