import React from 'react';
import { Grid } from '@material-ui/core';
import CardItem from '../components/CardItem';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';

const EventsListView = () => {
    return (
        <div>
            <Header />
            <Container maxWidth="lg">
                <h1>Events List view will be here</h1>
                <Grid container justify="space-around" spacing={2}>
                    <Grid container justify="center" item xs={4} sm={5}>
                        <CardItem />
                    </Grid>
                    <Grid container justify="center" item xs={4} sm={5}>
                        <CardItem />
                    </Grid>
                    <Grid container justify="center" item xs={4} sm={5}>
                        <CardItem />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default EventsListView;