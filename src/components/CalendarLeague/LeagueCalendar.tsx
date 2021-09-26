import React from "react";
import {leagueMatchesType} from "../../types/types";
import './LeagueCalendar.css'

type propsType = {
  matches: leagueMatchesType
}

const Leagues: React.FC<propsType> = ({matches, ...props}) => {
  let competitionName = null
  let pageData = null
  if (matches) {
    competitionName = matches.competition.name
    pageData = matches.matches.map(m => {
      return <div key={m.id}>
        <p>{m.homeTeam.name} {m.stage} {m.score.winner ? m.score.winner : m.utcDate} {m.awayTeam.name}</p>
      </div>
    })
  }

  return <div className={"league-matches-page"}>
    <h1>{competitionName} Calendar</h1>
    {pageData}
  </div>
}

export default Leagues