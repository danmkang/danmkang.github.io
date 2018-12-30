import React from 'react';
import './EventCard.css'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SpeakerSet from '../SpeakerSet';

const styles = {
    card: {
        maxWidth: 1100,
        margin: '25px auto',
        padding: '50px 25px',
        textAlign: 'left'
    },
    content: {
        margin: 'auto',
        width: 940
    },
    cta: {
        color: '#008BFF',
        textDecoration: 'none',
    },
    copyWrapper: {
        display: 'flex'
    },
    copy: {
        width: '65%'
    },
    speakerSet: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 50
    },
};

const EventCard = ({ classes }) => {
    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <p>Upcoming Events</p>
                <h2>Product Management in B2B vs. B2C</h2>
                <div className={classes.copyWrapper}>
                    <div className={classes.copy}>
                        <p>When</p>
                        <p>February 12, 2019</p>
                        <p>6PM to 9PM</p>
                        <p>Where</p>
                        <p>Tulip Retail, 1 Yonge St</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <a className={classes.cta} href="https://www.meetup.com/ProductGO/">Register for event</a>
                    </div>
                    <div className={classes.speakerSet}>
                        <SpeakerSet />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default withStyles(styles)(EventCard);