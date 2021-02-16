import React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import ToogleMenu from './ToogleMenu';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    customTooltip: {
      maxWidth: 75,
      backgroundColor: 'blue',
    },
  })
);

export default function Header() {
  const classes = useStyles();

  // 1 way to style tooltip
  const SlimTooltip = withStyles({
    tooltip: {
      backgroundColor: 'red',
      maxWidth: 50,
    },
  })(Tooltip);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <ToogleMenu />
          {/* app title */}
          <Typography variant="h6" className={classes.title}>
            Events timetable
          </Typography>

          {/* redirect to add events view */}
          <SlimTooltip title="add new event even very, very long">
            <Button
              component={Link}
              to="/add"
              startIcon={<AddIcon />}
              variant="contained"
              color="primary"
            >
              Add event
            </Button>
          </SlimTooltip>

          {/* 2 way to style tooltip */}
          <Tooltip
            title="way to classes tooltip"
            classes={{
              tooltip: classes.customTooltip,
            }}
          >
            <Button variant="contained" color="primary">
              second button
            </Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}
