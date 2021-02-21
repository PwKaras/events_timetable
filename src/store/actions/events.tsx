import { EventItem } from '../../shared/types';
import * as actionTypes from './actionTypes';

export const getEvents = (resData: EventItem[] | [] ) => {
  return {
    type: actionTypes.FETCH_EVENTS,
    eventsList: resData,
  };
};

export const fetchEvents = (resData: EventItem[] | []) => {
  // thanks to middleware - thunk - between action and reducer through the function that receive dispatch as argument we can executed dispatch() as assynchornious code
  return (dispatch:any, getState:any) => {
    getState(resData)
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
  return (dispatch: any, getState:any) => {
    dispatch(getEvent(resData));
  };
};
// export const fetchEvent = ( ) => {
//   return (dispatch: any, getstate: any) => {
//     dispatch(takeEvent)
//   }
// }
