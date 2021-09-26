import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";
import leagueLogo from '../../../assets/leagueLogo.png'
import React from "react";

type propsType = {
  emblemUrl: string
  leagueName: string
}

const LeagueCard: React.FC<propsType> = ({emblemUrl, leagueName, ...props}) => {
  if (!emblemUrl) emblemUrl = leagueLogo
  return <div>
    <Card sx={{width: 280, height: 370}}>
      <CardMedia
        component="img"
        width="200"
        image={emblemUrl}
        alt="someLeague"
        sx={{padding: "10px", maxWidth: 260}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {leagueName}
        </Typography>
      </CardContent>
    </Card>
  </div>
}

export default LeagueCard