import React, {useEffect, useState} from "react";
import {teamType} from "../../types/types";
import {Box, Grid, TextField} from "@material-ui/core";
import TeamCard from "./TeamCard/TeamCard";
import {createBrowserHistory} from "history";
import qs from "qs";

type propsType = {
  teams: Array<teamType>
}

const Teams: React.FC<propsType> = ({teams}) => {
  const [team, setTeam] = useState<string>('')
  const history = createBrowserHistory()

  useEffect(() => {
    const filterParams = history.location.search.substr(1);
    const filtersFromParams = qs.parse(filterParams);
    if (filtersFromParams.team) {
      setTeam(String(filtersFromParams.team));
    }
  }, [])

  useEffect(() => {
    history.push(`?team=${team}`);
  }, [team]);

  const filteredTeams = teams.filter(t => {
    return t.name.toLowerCase().includes(team.toLowerCase())
  })

  const teamsData = filteredTeams.map(t => <Grid item key={t.id}>
    <TeamCard areaName={t.area.name} founded={t.founded} crestUrl={t.crestUrl} teamName={t.name}/>
  </Grid>)

  return <Box sx={{padding: "50px"}}>
    <div className={"h1withSearch"}>
      <h1>TEAMS</h1>
      <TextField id="outlined-basic" label="Search Team..." variant="outlined" color={"warning"} value={team}
                 sx={{marginBottom: "40px"}}
                 onChange={(e) => {
                   setTeam(e.target.value)
                 }}/>
    </div>
    <Grid container spacing={2}>
      {teamsData}
    </Grid>
  </Box>
}

export default Teams