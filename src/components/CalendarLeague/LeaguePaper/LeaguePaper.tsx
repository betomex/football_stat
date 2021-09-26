import {Box, Paper} from "@material-ui/core";
import React from "react";

type propsType = {
  homeTeamName: string
  awayTeamName: string
  stage: string
  utcDate: string
  homeScore: number | null
  awayScore: number | null
  status: string
}

const LeaguePaper: React.FC<propsType> =
  ({homeTeamName, awayTeamName, stage, utcDate, awayScore, homeScore, status}) => {
    let isFinished = status === "FINISHED"
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
        {stage}
      </Box>
      <Box sx={{display: "flex", justifyContent: "center"}}>
        {isFinished ? null : utcDate}
      </Box>
    </Paper>
  }

export default LeaguePaper