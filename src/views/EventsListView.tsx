import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Theme } from '@material-ui/core';
import CardItem from '../components/CardItem';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';
import { EventItem } from './EventItem';
import { Title } from '../components/Title';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes';

const EventsListView = (props: any) => {
  // loading state
  const [loading, setIsLoading] = useState(false);

  // prepare to holding data fetching from GET /events
  // const [eventsList, setEventsList] = useState<EventItem[]>([]);

  const useStyles = makeStyles((theme: Theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    cardContent: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();

  // fentching date - endpoint GET /events
  // useEffect(() => {
  //   const sendRequest = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch('http://localhost:9000/events');
  //       const responseData = await response.json();
  //       if (!response.ok) {
  //         console.log('Something went wrong, try again later');
  //       }
  //       setEventsList(responseData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setIsLoading(false);
  //   };
  //   sendRequest();
  // }, []);

  return (
    <React.Fragment>
      <Header />
      {loading && (
        <Container>
          <LoadingSpinner />
        </Container>
      )}
      {/* when loading is finished -  display list of fetching */}
      {!loading && (
        <Container maxWidth="lg">
          <Title>Events List</Title>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {props.eventsList.map((eventItem:EventItem) => (
                <Grid item key={eventItem.id} xs={12} sm={6} md={4}>
                  <CardItem eventItem={eventItem} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Container>
      )}
      ;
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    eventsList: state.eventsList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFetchEventsList: () => dispatch({ type: actionTypes.FETCH_EVENTS }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsListView);
