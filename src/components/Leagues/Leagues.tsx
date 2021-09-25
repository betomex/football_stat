import './Leagues.css'
import React from "react";
import {leagueType} from "../../types/types";

type propsType = {
  leagues: Array<leagueType>
}

const Leagues: React.FC<propsType> = ({leagues, ...props}) => {
  const leaguesNames = leagues.map(l => {
    if (l.emblemUrl) {
      return <div key={l.id}>
        <img alt={"someLeague"} src={l.emblemUrl} className={"imgLeagueLogo"}/>
        <p>{l.name}</p>
      </div>
    }
    return <p key={l.id}>{l.name}</p>
  })
  return <div className={"leagues-page"}>
    <h1>LEAGUES</h1>
    {leaguesNames}
  </div>
}

export default Leagues