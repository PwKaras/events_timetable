import React from 'react';
import { EventItem } from '../shared/types';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import { Title } from './Title';
import LoadingSpinner from './LoadingSpinner';
import { Container } from '@material-ui/core';

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
  const {title, image, description, date, time, place, eventType, phone, email} = props.eventItem;
  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Title>{title}</Title>
          // <Typography component="h1" variant="h5" align="center">
          // </Typography>
        }
      />
      {!image ? (
        <Container>
          <LoadingSpinner />
        </Container>
      ) : (
        <CardMedia className={classes.media} image={image} />
      )}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <Typography paragraph>Date: {date}</Typography>
        <Typography paragraph>Time: {time}</Typography>
        <Typography paragraph>Where: {place}</Typography>
        <Typography paragraph>Focus to: {eventType}</Typography>
        <Typography paragraph>
          <PhoneIcon color="primary" /> {phone}
        </Typography>
        <Typography paragraph>
          <EmailIcon color="primary" /> {email}
        </Typography>
      </CardContent>
    </Card>
  );
};
