import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";

class App extends React.Component {
  render() {
    return <div>
      <Navbar/>
      <div className="App-header">
        <Route exact path="/leagues" render={() =>
          <div>leagues</div>
        }/>
        <Route exact path="/teams" render={() =>
          <div>teams</div>
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
