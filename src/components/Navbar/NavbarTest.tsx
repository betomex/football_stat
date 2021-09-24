import {Button} from '@material-ui/core';
import * as React from 'react';
import {Link as RouterLink, MemoryRouter as Router,} from 'react-router-dom';

export const NavbarTest = () => (
  <div>
    <Router>
      <Button component={RouterLink} to="/">With prop forwarding</Button>
    </Router>
  </div>
)