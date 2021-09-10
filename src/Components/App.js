import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"

import { Provider } from "react-redux";
import configureStore from "../store/configureStore"
import { BrowserRouter, Route } from "react-router-dom";


import Login from "./Login";
import TicketList from "./TicketList";

const store = configureStore()

function App() {
  return (
    <BrowserRouter>
    <Provider store={ store }>
      <Route path="/Login" component={Login} />      
      <Route exact path="/" component={ TicketList } />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
