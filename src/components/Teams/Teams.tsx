import React, {useState} from "react";
import {teamType} from "../../types/types";
import {Box, Grid, TextField} from "@material-ui/core";
import TeamCard from "./TeamCard/TeamCard";

type propsType = {
  teams: Array<teamType>
}

const Teams: React.FC<propsType> = ({teams, ...props}) => {
  const [team, setTeam] = useState('')

  const filteredTeams = teams.filter(t => {
    return t.name.toLowerCase().includes(team.toLowerCase())
  })

  const teamsData = filteredTeams.map(t => <Grid item key={t.id}>
    <TeamCard areaName={t.area.name} founded={t.founded} crestUrl={t.crestUrl} teamName={t.name}/>
  </Grid>)

  return <Box sx={{padding: "50px"}}>
    <h1>TEAMS</h1>
    <TextField id="outlined-basic" label="Search Team..." variant="outlined" color={"warning"}
               sx={{marginBottom: "40px"}}
               onChange={(e) => {
                 setTeam(e.target.value)
               }}/>
    <Grid container spacing={2}>
      {teamsData}
    </Grid>
  </Box>
}

export default Teams