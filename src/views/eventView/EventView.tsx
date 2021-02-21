import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EventItem } from '../../shared/types';
import Header from '../../components/Header';
import CartItemFull from '../../components/CartItemFull';
import Container from '@material-ui/core/Container';
import LoadingSpinner from '../../components/LoadingSpinner';
import { connect } from 'react-redux';
import * as actionsCreators from '../../store/actions';


interface ParamsType {
  eventID: string;
}

const EventView = (props: any) => {
  const ID = useParams<ParamsType>().eventID;
  const [loading, setIsLoading] = useState(false);
  // const [eventItem, setEventItem] = useState<EventItem | null>(null);
  const { eventItem, onFetchEvent} = props;

  // get eventItem directly from the store
  // const {eventsList} = props;
  // const eventItem = eventsList.find( (item: EventItem) => item.id === ID);

  //   fetching data triggered on change ID extracted from URL
  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:9000/events/${ID}`);
        const responseData = await response.json();
        if (!response.ok) {
          console.log('Something went wrong, try again later');
        }
        // setEventItem(responseData);
        onFetchEvent(responseData);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, [ID, onFetchEvent]);

  return (
    <React.Fragment>
      <Header />
      {loading && (
        <Container>
          <LoadingSpinner />
        </Container>
      )}
      {!loading && eventItem && (
        <Container maxWidth="sm">
          <CartItemFull eventItem={eventItem} />
        </Container>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    eventItem: state.displayedEvent,
  };
};
 const mapDispatchToProps = (dispatch: any) => {
   return {
     onFetchEvent: (resData: EventItem) => dispatch(actionsCreators.fetchEvent(resData)),
   }
 }

export default connect(mapStateToProps, mapDispatchToProps) (EventView);
