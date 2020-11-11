import React, { useState } from 'react';
import Header from '../components/Header';
import { AddEventForm } from '../components/AddEventForm';
import { Container } from '@material-ui/core';
import LoadingSpinner from '../components/LoadingSpinner';

const AddEventView = () => {

    const [loading, setIsLoading] = useState(false);

    return (
    <React.Fragment>
      <Header />
      {loading && (
        <Container>
          <LoadingSpinner />
        </Container>
      )}
      <Container>
      <AddEventForm />
      </Container>
    </React.Fragment>
  );
};

export default AddEventView;
