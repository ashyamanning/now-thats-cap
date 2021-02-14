import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from "./features/LandingPage/LandingPage";
import CategoryHome from "./features/CategoryPage/CategoryHome";
import Menu from "./features/MenuPage/Menu";
import Results from "./features/ResultsPage/Results";
import Game from "./features/GamePage/Game";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <LandingPage/>
        </Route>
        <Route path={"/menu"}>
          <Menu/>
        </Route>
        <Route path={'/categories'}>
          <CategoryHome/>
        </Route>
        <Route path={"/play"}>
          <Game/>
        </Route>
        <Route path={"/results"}>
          <Results/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
