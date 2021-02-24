import { EventItem } from '../../shared/types';
import * as actionTypes from '../actions/actionTypes';

type EventsList =  EventItem[] | []

const eventsList: EventsList = [
    {
      id: "pl1",
      title: "Mountain hiking",
      image: "https://picsum.photos/id/997/200/300",
      date: "2020-11-15",
      time: "09:00:00",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sapiente officia iure magni eaque. In assumenda recusandae laudantium, quibusdam hic perspiciatis enim qui nemo nobis nostrum modi eaque aut incidunt.",
      eventType: "sport",
      phone: "0048600000000",
      email: "john@john.com",
      place: "Blue Mountain"
    }
];

const displayedEvent: EventItem | {} = {};
const appliedFilters: string[] | [] = [];
const initialState = {
  eventsList,
  displayedEvent,
  appliedFilters,
}; 

const eventsListReducer = (state = initialState, action: any) => {
  // in the body of action are holding payloads ex. eventsLsist from reducer is in action.
  switch (action.type) {
    case actionTypes.FETCH_EVENTS:
      return {
        ...state,
        eventsList: action.eventsList,
      };
      case actionTypes.FETCH_EVENT:
        return {
          ...state,
          displayedEvent: action.event,
        };
        case actionTypes.FILTER_BY_EVENT_TYPE: 
        return {
          ...state,
          appliedFilters: action.appliedFilters
        };
      default: return state
  }
};

export default eventsListReducer;
