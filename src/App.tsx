import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Redirect, Route} from "react-router-dom";
import LeaguesContainer from "./components/Leagues/LeaguesContainer";
import TeamsContainer from "./components/Teams/TeamsContainer";
import LeagueCalendarContainer from "./components/CalendarLeague/LeagueCalendarContainer";
import TeamCalendarContainer from "./components/CalendarTeam/TeamCalendarContainer";

class App extends React.Component {
  render() {
    return <div>
      <Navbar/>
      <div className="App-header">
        <Redirect from={"/"} to={"/leagues"}/>
        <Route exact path="/leagues" render={() =>
          <LeaguesContainer/>
        }/>
        <Route exact path="/teams" render={() =>
          <TeamsContainer/>
        }/>
        <Route exact path="/league_calendar" render={() =>
          <LeagueCalendarContainer/>
        }/>
        <Route exact path="/team_calendar" render={() =>
          <TeamCalendarContainer/>
        }/>
      </div>
    </div>
  }
}

export default App;
