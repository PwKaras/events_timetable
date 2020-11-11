import React from 'react';
import { EventItem } from '../views/EventItem';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

type P = {
  eventItem: EventItem;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 50,
      //   maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  })
);

export default function CartItemFull(props: P) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Typography gutterBottom variant="h4" component="h2">
            {props.eventItem.title}
          </Typography>
        }
      />
      <CardMedia
        className={classes.media}
        image={props.eventItem.image}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.eventItem.description}
        </Typography>
        <Typography paragraph>Date: {props.eventItem.date}</Typography>
        <Typography paragraph>Time: {props.eventItem.time}</Typography>
        <Typography paragraph>Where: {props.eventItem.place}</Typography>
        <Typography paragraph>Focus to: {props.eventItem.eventType}</Typography>
        <Typography paragraph>
          <PhoneIcon color="primary"/> {props.eventItem.phone}
        </Typography>
        <Typography  paragraph>
          <EmailIcon color="primary"/> {props.eventItem.email}
        </Typography>
      </CardContent>
    </Card>
  );
}
