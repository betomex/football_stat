import React from "react";
import './TeamCalendar.css'
import {teamMatchesType} from "../../types/types";

type propsType = {
  teamMatches: Array<teamMatchesType>
  teamID: number
}

const TeamsCalendar: React.FC<propsType> = ({teamMatches, teamID, ...props}) => {
  let teamName = null
  let teamMatchesData = null

  if (teamMatches) {
    teamName = teamMatches[0].awayTeam.id === teamID ? teamMatches[0].awayTeam.name : teamMatches[0].homeTeam.name
    teamMatchesData = teamMatches.map(tm => {
      let myTeamStatus = tm.awayTeam.id === teamID ? "AWAY_TEAM" : "HOME_TEAM"
      let winner = null
      if (tm.score.winner === "DRAW") winner = "Draw"
      else if (tm.score.winner === myTeamStatus) winner = "Win"
      else winner = "Loss"

      return <div key={tm.id}>
        <img src={tm.competition.area.ensignUrl} alt="someMatch" className={"imgTeamMatchLogo"}/>
        <p>
          {tm.competition.name + " "}
          {tm.homeTeam.id === teamID ? tm.awayTeam.name + " " : tm.homeTeam.name + " "}
          {tm.status === "FINISHED" ? tm.status + " " + winner : tm.utcDate}
        </p>
      </div>
    })
  }

  return <div className={"team-matches-page"}>
    <h1>{teamName} Calendar</h1>
    {teamMatchesData}
  </div>
}

export default TeamsCalendar