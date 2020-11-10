import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import CardItem from '../components/CardItem';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import { EventItem } from './EventItem';

const EventsListView = () => {
  const [eventsList, setEventsList] = useState<EventItem[]>([]);

//   dummy data to develop app
  const DUMMY_EVENTS = [
    {
      id: 'pl1',
      title: 'Mountain hiking',
      image: 'https://picsum.photos/seed/picsum/200/300',
      time: '2020-11-15',
    },
    {
      id: 'pl2',
      title: 'Balloon Fiesta',
      image: 'https://picsum.photos/id/36/200/300',
      time: '2021-10-09',
    },
    {
      id: 'pl3',
      title: 'Public Health',
      image: 'https://picsum.photos/id/145/200/300',
      time: '2020-12-05',
    },
  ];

  useEffect(() => {
      fetch('http://localhost:9000/events')
      .then(response => response.json()
      .then(responseData => setEventsList(responseData)));
  }, []);


  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <h1>Events List view will be here</h1>
        <Grid container justify="space-around" spacing={2}>
          {eventsList.map((eventItem) => (
            <Grid container justify="center" item xs={4} sm={5}>
              <CardItem eventItem={eventItem} key={eventItem.id} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default EventsListView;
