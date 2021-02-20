import { EventItem } from '../../views/EventItem';
import * as actionTypes from './actionTypes';

export const takeEvents = (resData: EventItem[] | [] ) => {
  return {
    type: actionTypes.FETCH_EVENTS,
    eventsList: resData,
  };
};

export const fetchEvents = (resData: EventItem[] | []) => {
  // thanks to middleware - thunk - between action and reducer through the function that receive dispatch as argument we can executed dispatch() as assynchornious code
  return (dispatch:any, getState:any) => {
    getState(resData)
    dispatch(takeEvents(resData));
  };
};
