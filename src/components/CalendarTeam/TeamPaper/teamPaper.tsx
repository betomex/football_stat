import {Box, Paper} from "@material-ui/core";
import React from "react";
import '../../../App.css'

type propsType = {
  competitionEnsignUrl: string
  competitionName: string
  awayTeamName: string
  homeTeamName: string
  utcDate: string
  status: string
  homeScore: number
  awayScore: number
}

const TeamPaper: React.FC<propsType> =
  ({competitionEnsignUrl, competitionName, awayTeamName, homeTeamName,
     utcDate, status, homeScore, awayScore,}) => {
  const isFinished = status === "FINISHED"
    return <Paper elevation={3} sx={{padding: 3, width: 850}}>
      <Box sx={{display: "flex", justifyContent: "center"}}>
        {homeTeamName}
        <div style={{color: "#ed730f", fontWeight: "bold", display: "flex"}}>
          &#8195;
          {isFinished ? <div>{homeScore}&#8195;</div> : null}
          &#10006;
          {isFinished ? <div>&#8195;{awayScore}</div> : null}
          &#8195;
        </div>
        {awayTeamName}
      </Box>
      <Box sx={{display: "flex", justifyContent: "center"}}>
        <img src={competitionEnsignUrl} alt="someMatch" className={"imgTeamMatchLogo"}/>
        <div>&#8195;{competitionName}</div>
      </Box>
      <Box sx={{display: "flex", justifyContent: "center"}}>
        {isFinished ? null : utcDate}
      </Box>
    </Paper>
  }

export default TeamPaper