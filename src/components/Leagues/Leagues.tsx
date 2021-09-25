import './Leagues.css'
import React from "react";

type propsType = {
  leagues: any
}

const Leagues: React.FC<propsType> = (props) => {
  if (props.leagues.competitions) {
    console.log(props.leagues.competitions[0].name)
  }

  return <div className={"leagues-page"}>
    Leagues
  </div>
}

export default Leagues