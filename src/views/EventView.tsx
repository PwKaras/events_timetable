import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EventItem } from './EventItem';
import Header from '../components/Header';
import CartItemFull from '../components/CartItemFull';
import Container from '@material-ui/core/Container';
import LoadingSpinner from '../components/LoadingSpinner';

interface ParamsType {
  eventID: string;
}
const EventView = () => {
  const ID = useParams<ParamsType>().eventID;
  const [loading, setIsLoading] = useState(false);
  const [eventItem, setEventItem] = useState<EventItem | null>(null);

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
        setEventItem(responseData);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, [ID]);

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

export default EventView;
