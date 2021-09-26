import React, {useState} from "react";
import {leagueMatchesType} from "../../types/types";
import {Box, Grid} from "@material-ui/core";
import LeaguePaper from "./LeaguePaper/LeaguePaper";
import DatePicker from 'react-date-picker';

type propsType = {
  matches: leagueMatchesType
}

const Leagues: React.FC<propsType> = ({matches}) => {
  const [valueFrom, setValueFrom] = useState<Date>(new Date("2011-01-01T12:00:00"));
  const [valueTo, setValueTo] = useState<Date>(new Date("2024-01-01T12:00:00"));

  const onDateFromChange = (date: Date) => {
    setValueFrom(date)
  }
  const onDateToChange = (date: Date) => {
    setValueTo(date)
  }

  let competitionName = null
  let pageData = null
  if (matches) {
    const filteredMatches = matches.matches.filter(m => {
      let matchDate = new Date(m.utcDate).getTime()
      return valueFrom.getTime() <= matchDate && matchDate <= valueTo.getTime()
    })

    competitionName = matches.competition.name
    pageData = filteredMatches.map(m => {
      let homeScore = m.score.fullTime.homeTeam! + m.score.extraTime.homeTeam! + m.score.penalties.homeTeam! + m.score.halfTime.homeTeam!
      let awayScore = m.score.fullTime.awayTeam! + m.score.extraTime.awayTeam! + m.score.penalties.awayTeam! + m.score.halfTime.awayTeam!

      return <Grid item key={m.id} alignSelf={"center"}>
        <LeaguePaper stage={m.stage} utcDate={m.utcDate} homeTeamName={m.homeTeam.name}
                     awayTeamName={m.awayTeam.name} awayScore={awayScore} homeScore={homeScore} status={m.status}/>
      </Grid>
    })
  }

  return <Box sx={{padding: "50px"}}>
    <div className={"h1withDate"}>
      <h1>{competitionName} Calendar</h1>
      <DatePicker onChange={(date: Date) => {
        onDateFromChange(date)
      }} value={valueFrom}/>
      <DatePicker onChange={(date: Date) => {
        onDateToChange(date)
      }} value={valueTo}/>
    </div>
    <Grid container spacing={2} direction="column">
      {pageData}
    </Grid>
  </Box>
}

export default Leagues