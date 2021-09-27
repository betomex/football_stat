import React, {useEffect, useState} from "react";
import {leagueType} from "../../types/types";
import LeagueCard from "./LeagueCard/LeagueCard";
import {Box, Grid, TextField} from '@material-ui/core';
import '../../App.css';
import {createBrowserHistory} from "history";
import qs from "qs";
import Preloader from "../../common/Preloader";

type propsType = {
  leagues: Array<leagueType>
}

const Leagues: React.FC<propsType> = ({leagues}) => {
  const [league, setLeague] = useState('');
  const history = createBrowserHistory()

  useEffect(() => {
    const filterParams = history.location.search.substr(1);
    const filtersFromParams = qs.parse(filterParams);
    if (filtersFromParams.league) {
      setLeague(String(filtersFromParams.league));
    }
  }, []);

  useEffect(() => {
    history.push(`?league=${league}`);
  }, [league]);

  if (leagues.length === 0) {
    return <Preloader/>
  }

  const filterLeagues = leagues.filter(l => {
    return l.name.toLowerCase().includes(league.toLowerCase())
  })

  const leaguesData = filterLeagues.map(l => <Grid item key={l.id}>
    <LeagueCard emblemUrl={l.emblemUrl} leagueName={l.name}/>
  </Grid>)

  return <Box sx={{padding: "50px"}}>
    <div className={"h1withSearch"}>
      <h1>LEAGUES</h1>
      <TextField id="outlined-basic" label="Search League..." variant="outlined" color={"warning"} value={league}
                 sx={{marginBottom: "40px", width: "50%", maxWidth: "250px"}}
                 onChange={(e) => {
                   setLeague(e.target.value)
                 }}/>
    </div>
    <Grid container spacing={3}>
      {leaguesData}
    </Grid>
  </Box>
};

export default Leagues