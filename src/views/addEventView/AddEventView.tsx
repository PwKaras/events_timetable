import React, { useState } from 'react';
import Header from '../../components/Header';
import { AddEventForm } from '../../components/addEventForm/AddEventForm';
import { Container } from '@material-ui/core';
import LoadingSpinner from '../../components/LoadingSpinner';
import { connect } from 'react-redux';
import { EventItem } from '../../shared/types';
import * as actionsCreators from '../../store/actions';
import { Title } from '../../components/Title';

const AddEventView = (props: any) => {
  const initialEvent: EventItem = {
    title: '',
    image: '',
    date: '',
    time: '',
    description: '',
    eventType: '',
    phone: '',
    email: '',
    place: '',
  };
  const { onAddEvent, onAddEventProcess, eventChanges } = props;
  const [loading, setIsLoading] = useState(false);

  // take values from formik
  const [catchedValues, setCatchedValues] = useState<EventItem>(initialEvent);
  const catchValuesFromFormik = (val: EventItem) => {
    setCatchedValues(val);
  };

  return (
    <React.Fragment>
      <Header />
      {loading && (
        <Container>
          <LoadingSpinner />
        </Container>
      )}
      <Container>
        <AddEventForm
          onAddEvent={onAddEvent}
          onAddEventProcess={onAddEventProcess}
          catchValuesFromFormik={catchValuesFromFormik}
        />
        <Container>
          <Title>{eventChanges.title}</Title>
        </Container>
        <Container>
          <Title>{catchedValues.title}</Title>
        </Container>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    eventChanges: state.eventChanges,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddEvent: (resData: EventItem) => {
      dispatch(actionsCreators.postEvent(resData));
    },
    onAddEventProcess: (resData: EventItem) => {
      dispatch(actionsCreators.followAddEventProcess(resData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEventView);
