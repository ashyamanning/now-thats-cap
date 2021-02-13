import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from "./features/LandingPage/LandingPage";
import Categories from "./features/CategoryPage/Categories";
import Menu from "./features/MenuPage/Menu";
import Results from "./features/ResultsPage/Results";
import Game from "./features/GamePage/Game";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path={"/"}>
        <LandingPage/>
      </Route>
      <Route path={"/menu"}>
        <Menu/>
      </Route>
      <Route path={'/categories'}>
        <Categories/>
      </Route>
      <Route path={"/play"}>
        <Game/>
      </Route>
      <Route path={"/results"}>
        <Results/>
      </Route>
    </div>
  );
}

export default App;
