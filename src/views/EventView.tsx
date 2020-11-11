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
      setIsLoading(true);
    fetch(`http://localhost:9000/events/${ID}`).then((response) =>
      response.json().then((responseData) => setEventItem(responseData))
    );
    setIsLoading(false);
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
          <CartItemFull 
          eventItem={eventItem}
          />
        </Container>
      )}
    </React.Fragment>
  );
};

export default EventView;
