import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { EventItem } from '../views/EventItem';

type P = {
  eventItem: EventItem;
};

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
});

export default function CardItem(props: P) {
  const classes = useStyles();

  return (
    <Link underline="none" component={RouterLink} to={`/events/${props.eventItem.id}`}>
      <Card
      className={classes.root}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.eventItem.image}
            title="Mountain hiking"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.eventItem.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.eventItem.date}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Show more
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}
