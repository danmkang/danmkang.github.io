import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Speaker from '../Speaker'

const styles = {
    card: {
        maxWidth: 1000,
        margin: '25px auto',
        textAlign: 'left'
    },
    cta: {
        color: '#008BFF',
        textDecoration: 'none'
    }
};

const EventCard = ({ classes }) => {
    return (
        <Card className={classes.card}>
            <CardContent>
                <p>Upcoming Events</p>
                <h2>Product Management in B2B vs. B2C</h2>
                <p>When</p>
                <p>February 12, 2019</p>
                <p>6PM to 9PM</p>
                <p>Where</p>
                <p>Tulip Retail, 1 Yonge St</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a className={classes.cta} href="https://www.meetup.com/ProductGO/">Register for event</a>
                <Speaker />
                <Speaker />
                <Speaker />
            </CardContent>
        </Card>
    )
}

export default withStyles(styles)(EventCard);