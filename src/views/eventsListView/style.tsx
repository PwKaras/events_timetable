import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    cardContent: {
      flexGrow: 1,
    },
    filterContainter: {
      display: 'flex',
      justifyContent: "flex-end"
    }
  }));