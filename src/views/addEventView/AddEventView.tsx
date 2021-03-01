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
  const { onAddEvent, onAddEventProcess, eventChanges } = props;
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
        <AddEventForm onAddEvent={onAddEvent} onAddEventProcess = {onAddEventProcess} />
        <Container>
          <Title>
          {eventChanges.title}
          </Title>
        </Container>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state:any) => {
  return {
    eventChanges: state.eventChanges,
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddEvent: (resData: EventItem) => {
      dispatch(actionsCreators.postEvent(resData));
    },
    onAddEventProcess: (resData:EventItem) => {
      dispatch(actionsCreators.followAddEventProcess(resData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEventView);
