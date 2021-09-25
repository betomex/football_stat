import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import LeaguesContainer from "./components/Leagues/LeaguesContainer";
import TeamsContainer from "./components/Teams/TeamsContainer";

class App extends React.Component {
  render() {
    return <div>
      <Navbar/>
      <div className="App-header">
        <Route exact path="/leagues" render={() =>
          <LeaguesContainer/>
        }/>
        <Route exact path="/teams" render={() =>
          <TeamsContainer/>
        }/>
        <Route exact path="/league_calendar" render={() =>
          <div>league_calendar</div>
        }/>
        <Route exact path="/team_calendar" render={() =>
          <div>team_calendar</div>
        }/>
      </div>
    </div>
  }
}

export default App;
