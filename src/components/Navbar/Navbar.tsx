import React from "react";
import {AppBar, Box, Button, Stack, Toolbar} from "@material-ui/core";
import {Link} from "react-router-dom";

const Navbar: React.FC = () => {
  return <Box sx={{flexGrow: 1}}>
    <AppBar position="fixed" color={"default"}>
      <Toolbar>
        <Stack spacing={2} direction={"row"}>
          <Button variant="outlined" color={"warning"} component={Link} to="/leagues">Лиги/Соревнования</Button>
          <Button variant="outlined" color={"warning"} component={Link} to="/teams">Команды</Button>
          <Button variant="outlined" color={"warning"} component={Link} to="/league_calendar">Календарь лиги</Button>
          <Button variant="outlined" color={"warning"} component={Link} to="/team_calendar">Календарь команды</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  </Box>
}

export default Navbar