import React, {useState} from "react";
import {leagueType} from "../../types/types";
import LeagueCard from "./LeagueCard/LeagueCard";
import {Box, Grid, TextField} from '@material-ui/core';

type propsType = {
  leagues: Array<leagueType>
}

const Leagues: React.FC<propsType> = ({leagues}) => {
  const [league, setLeague] = useState<string>('');

  const filterLeagues = leagues.filter(l => {
    return l.name.toLowerCase().includes(league.toLowerCase())
  })

  const leaguesData = filterLeagues.map(l => <Grid item key={l.id}>
    <LeagueCard emblemUrl={l.emblemUrl} leagueName={l.name}/>
  </Grid>)

  return <Box sx={{padding: "50px"}}>
    <div className={"h1withSearch"}>
      <h1>LEAGUES</h1>
      <TextField id="outlined-basic" label="Search League..." variant="outlined" color={"warning"}
                 sx={{marginBottom: "40px"}}
                 onChange={(e) => {
                   setLeague(e.target.value)
                 }}/>
    </div>

    <Grid container spacing={3}>
      {leaguesData}
    </Grid>
  </Box>
}

export default Leagues