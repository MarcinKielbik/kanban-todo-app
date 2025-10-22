import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/todo">
          To-Do Lista
        </Button>
        <Button color="inherit" component={Link} to="/kanban">
          Tablica Kanban
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;