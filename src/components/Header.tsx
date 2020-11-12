import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import ToogleMenu from './ToogleMenu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    }
  })
);

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <ToogleMenu />
          {/* app title */}
          <Typography variant="h6" className={classes.title}>
            Events timetable
          </Typography>
          
          {/*redirect to add events view  */}
          <Button
            component={Link}
            to="/add"
            startIcon={<AddIcon />}
            variant="contained"
            color="primary"
          >
            Add event
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
