import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";
import leagueLogo from '../../../assets/leagueLogo.png'
import React from "react";

type propsType = {
  areaName: string
  founded: number
  crestUrl: string
  teamName: string
}

const TeamCard: React.FC<propsType> = ({areaName, founded, crestUrl, teamName, ...props}) => {
  if (!crestUrl) crestUrl = leagueLogo
  return <div>
    <Card sx={{width: 210, maxHeight: 450}}>
      <CardMedia
        component="img"
        height="190"
        image={crestUrl}
        alt="someTeam"
        sx={{padding: "10px", maxWidth: 190}}
      />
      <CardContent sx={{height: 120}}>
        <Typography gutterBottom variant="h6" component="div">
          {areaName} <br/> {founded} <br/> {teamName}
        </Typography>
      </CardContent>
    </Card>
  </div>
}

export default TeamCard