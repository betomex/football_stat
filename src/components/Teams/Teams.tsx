import React from "react";
import './Teams.css'
import {teamType} from "../../types/types";

type propsType = {
  teams: Array<teamType>
}

const Teams: React.FC<propsType> = ({teams, ...props}) => {
  const teamsNames = teams.map(t => {
    if (t.crestUrl) {
      return <div key={t.id}>
        <img alt={"someTeam"} src={t.crestUrl} className={"imgTeamLogo"}/>
        <p>{t.name}</p>
      </div>
    }
    return <p key={t.id}>{t.name}</p>
  })

  return <div className={"teams-page"}>
    <h1>TEAMS</h1>
    {teamsNames}
  </div>
}

export default Teams