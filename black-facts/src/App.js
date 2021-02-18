import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from "./features/LandingPage/LandingPage";
import CategoryHome from "./features/CategoryPage/CategoryHome";
import Menu from "./features/MenuPage/Menu";
import Results from "./features/ResultsPage/Results";
import Game from "./features/GamePage/PlayGame";
import Score from "./features/Score/Score"
import NewTimer from "./features/Timer/Timer"
import {useSelector} from "react-redux"
import './App.css';

const App = () => {
  const loading = useSelector((state) => state.loading)
  if (loading) return <div>LOADING...</div>
  const time = new Date();
  // time.setSeconds(time.getSeconds() + 90); // 10 minutes timer
  // console.log(time)
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
          <Game expiryTimeStamp={time}/>
          {/* <Score/> */}
        </Route>
        <Route path={"/results"}>
          <Results/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
