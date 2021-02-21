import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import EventsListView from './views/eventsListView/EventsListView';
import EventView from './views/eventView/EventView';
import AddEventView from './views/addEventView/AddEventView';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/events" exact>
          <EventsListView />
        </Route>
        <Route path="/events/:eventID">
          <EventView />
        </Route>
        <Route path="/add">
          <AddEventView />
        </Route>
  {/* in case of incorect URL - redirect to main view /events */}
        <Redirect to="/events" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
