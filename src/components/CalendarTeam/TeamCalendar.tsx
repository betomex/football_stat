import React, {useEffect, useState} from "react";
import {teamMatchesType} from "../../types/types";
import {Box, Grid} from "@material-ui/core";
import DatePicker from "react-date-picker";
import TeamPaper from "./TeamPaper/teamPaper";
import {createBrowserHistory} from "history";
import {getUrlParams} from "../../common/common";

type propsType = {
  teamMatches: Array<teamMatchesType>
  teamID: number
}

const TeamsCalendar: React.FC<propsType> = ({teamMatches, teamID}) => {
  const [dateTeamFrom, setDateTeamFrom] = useState<Date | null>(new Date("2011-01-01T12:00:00"));
  const [dateTeamTo, setDateTeamTo] = useState<Date | null>(new Date("2024-01-01T12:00:00"));
  const history = createBrowserHistory()

  useEffect(() => {
    const urlParams = getUrlParams()
    setDateTeamFrom(urlParams[0])
    setDateTeamTo(urlParams[1])
  }, [])

  useEffect(() => {
    let preparedPush = `?dateFrom=${String(dateTeamFrom).substr(4, 21)}&dateTo=${String(dateTeamTo).substr(4, 21)}`
    history.push(preparedPush);
  }, [dateTeamFrom, dateTeamTo]);

  const onDateFromChange = (date: Date) => {
    setDateTeamFrom(date)
  }
  const onDateToChange = (date: Date) => {
    setDateTeamTo(date)
  }

  let teamName = null
  let teamMatchesData = null

  if (teamMatches) {
    teamName = teamMatches[0].awayTeam.id === teamID ? teamMatches[0].awayTeam.name : teamMatches[0].homeTeam.name

    const filteredTeamMatches = teamMatches.filter(tm => {
      let matchDate = new Date(tm.utcDate).getTime()
      if (dateTeamFrom && dateTeamTo) {
        return dateTeamFrom.getTime() <= matchDate && matchDate <= dateTeamTo.getTime()
      }
      return true
    })

    teamMatchesData = filteredTeamMatches.map(tm => {
      let homeScore = tm.score.halfTime.homeTeam! + tm.score.fullTime.homeTeam! + tm.score.extraTime.homeTeam! + tm.score.penalties.homeTeam!
      let awayScore = tm.score.halfTime.awayTeam! + tm.score.fullTime.awayTeam! + tm.score.extraTime.awayTeam! + tm.score.penalties.awayTeam!

      return <Grid item key={tm.id} alignSelf={"center"}>
        <TeamPaper homeTeamName={tm.homeTeam.name} awayTeamName={tm.awayTeam.name} utcDate={tm.utcDate}
                   status={tm.status} competitionEnsignUrl={tm.competition.area.ensignUrl}
                   competitionName={tm.competition.name} homeScore={homeScore} awayScore={awayScore}/>
      </Grid>
    })
  }

  return <Box>
    <div className={"h1withTeamDate"}>
      <h1>{teamName} Calendar</h1>
      <DatePicker onChange={(date: Date) => {
        onDateFromChange(date)
      }} value={dateTeamFrom}/>
      <DatePicker onChange={(date: Date) => {
        onDateToChange(date)
      }} value={dateTeamTo}/>
    </div>
    <Grid container spacing={2} direction="column">
      {teamMatchesData}
    </Grid>
  </Box>
}

export default TeamsCalendar