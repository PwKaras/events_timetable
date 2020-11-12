import React from 'react';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 40,
    },
  })
);

type Props = {
  children: React.ReactNode;
};

// universal view title
export const Title: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        {children}
      </Typography>
    </div>
  );
};
