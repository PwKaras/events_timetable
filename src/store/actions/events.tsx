import { EventItem } from '../../shared/types';
import * as actionTypes from './actionTypes';

export const getEvents = (resData: EventItem[] | []) => {
  return {
    type: actionTypes.FETCH_EVENTS,
    eventsList: resData,
  };
};
export const fetchEvents = (resData: EventItem[] | []) => {
  // thanks to middleware - thunk - between action and reducer through the function that receive dispatch as argument we can executed dispatch() as assynchornious code
  return (dispatch: any, getState: any) => {
    getState(resData);
    dispatch(getEvents(resData));
  };
};

export const getEvent = (resData: EventItem) => {
  return {
    type: actionTypes.FETCH_EVENT,
    event: resData,
  };
};
export const fetchEvent = (resData: EventItem) => {
  return (dispatch: any, getState: any) => {
    dispatch(getEvent(resData));
  };
};

const getFilter = (resData: string[] | []) => {
  return {
    type: actionTypes.FILTER_BY_EVENT_TYPE,
    appliedFilters: resData,
  };
};

export const filterByEventType = (resData: string[] | []) => {
  return (dispatch: any, getState: any) => {
    dispatch(getFilter(resData));
  };
};

const catchEvent = (resData: EventItem) => {
  return {
    type: actionTypes.POST_EVENT,
    newEvent: resData,
  };
};

export const postEvent = (resData: EventItem) => {
  return (dispatch: any, getState: any) => {
    dispatch(catchEvent(resData));
  };
};

const catchAddEventChanges = (resData:EventItem) => {
  return {
    type: actionTypes.FOLLOW_ADD_EVENT_PROCESS,
    newEventChanges: resData,
  }
};

export const followAddEventProcess = (resData: EventItem) => {
  return (dispatch: any, getState: any) => {
    dispatch(catchAddEventChanges(resData));
  };
};
