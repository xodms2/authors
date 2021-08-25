import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/views/Main";
import NewAuthor from "./components/views/NewAuthor";
import EditAuthor from "./components/views/EditAuthor";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/api/authors/new/" exact component={NewAuthor} />
          <Route path="/api/authors/:id/edit" exact component={EditAuthor} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
