import React, {useEffect, useState} from "react";
import {leagueMatchesType} from "../../types/types";
import {Box, Grid} from "@material-ui/core";
import LeaguePaper from "./LeaguePaper/LeaguePaper";
import DatePicker from 'react-date-picker';
import {createBrowserHistory} from "history";
import {getUrlParams} from "../../common/common";
import Preloader from "../../common/Preloader";

type propsType = {
  matches: leagueMatchesType
}

const Leagues: React.FC<propsType> = ({matches}) => {
  const [dateLeagueFrom, setDateLeagueFrom] = useState<Date | null>(new Date("2011-01-01T12:00:00"));
  const [dateLeagueTo, setDateLeagueTo] = useState<Date | null>(new Date("2024-01-01T12:00:00"));
  const history = createBrowserHistory()

  useEffect(() => {
    const urlParams = getUrlParams()
    setDateLeagueFrom(urlParams[0])
    setDateLeagueTo(urlParams[1])
  }, [])

  useEffect(() => {
    let preparedPush = `?dateFrom=${String(dateLeagueFrom).substr(4, 21)}&dateTo=${String(dateLeagueTo).substr(4, 21)}`
    history.push(preparedPush);
  }, [dateLeagueFrom, dateLeagueTo]);

  if (!matches) {
    return <Preloader/>
  }

  const onDateFromChange = (date: Date) => {
    setDateLeagueFrom(date)
  }
  const onDateToChange = (date: Date) => {
    setDateLeagueTo(date)
  }

  let competitionName = null
  let pageData = null
  if (matches) {
    const filteredMatches = matches.matches.filter(m => {
      let matchDate = new Date(m.utcDate).getTime()
      if (dateLeagueFrom && dateLeagueTo) {
        return dateLeagueFrom.getTime() <= matchDate && matchDate <= dateLeagueTo.getTime()
      }
      return true
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
    <div className={"h1withLeagueDate"}>
      <h1>{competitionName} Calendar</h1>
      <DatePicker onChange={(date: Date) => {
        onDateFromChange(date)
      }} value={dateLeagueFrom}/>
      <DatePicker onChange={(date: Date) => {
        onDateToChange(date)
      }} value={dateLeagueTo}/>
    </div>
    <Grid container spacing={2} direction="column">
      {pageData}
    </Grid>
  </Box>
}

export default Leagues