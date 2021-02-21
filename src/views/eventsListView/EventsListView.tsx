import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import CardItem from '../../components/CardItem';
import Container from '@material-ui/core/Container';
import Header from '../../components/Header';
import LoadingSpinner from '../../components/LoadingSpinner';
import { EventItem } from '../../shared/types';
import { Title } from '../../components/Title';
import { connect } from 'react-redux';
import * as actionsCreators from '../../store/actions/index';
import { useStyles } from './style';



const EventsListView = (props: any) => {
  // loading state
  const [loading, setIsLoading] = useState(false);
  
  const { eventsList, onFetchEventsList } = props;
  
  // prepare to holding data using hooks (no redux) fetching from GET /events - 
  // const [eventsList, setEventsList] = useState<EventItem[]>([]);

  const classes = useStyles();

  // fentching date - endpoint GET /events
  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:9000/events');
        const responseData = await response.json();
        if (!response.ok) {
          console.log('Something went wrong, try again later');
        }
        // setEventsList(responseData);
        onFetchEventsList(responseData);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, [onFetchEventsList]);

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
              {eventsList.map((eventItem: EventItem) => (
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
    onFetchEventsList: (resData: EventItem[] | []) => dispatch(actionsCreators.fetchEvents(resData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsListView);
