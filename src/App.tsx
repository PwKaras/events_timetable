import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import EventsListView from './views/EventsListView';
import EventView from './views/EventView';
import AddEventView from './views/AddEventView';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/events" exact>
          <EventsListView />
        </Route>
        <Route path="/event/:eventID">
          <EventView />
        </Route>
        <Route path="/add">
          <AddEventView />
        </Route>
        <Redirect to="/events" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
