import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  // root: {
  //   maxWidth: 345,
  // },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
});

export default function CardItem() {
  const classes = useStyles();

  return (
    <Card 
    // className={classes.root}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://picsum.photos/seed/picsum/200/300"
          title="Mountain hiking"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Mountain hiking
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           2020-11-15
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Show more
        </Button>
      </CardActions>
    </Card>
  );
}