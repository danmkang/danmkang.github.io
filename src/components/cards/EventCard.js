import React from 'react';
import './EventCard.css'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SpeakerSet from '../SpeakerSet';

const styles = {
    card: {
        margin: '25px auto',
        padding: '50px 25px',
        textAlign: 'left'
    },
    content: {
        margin: 'auto',
        maxWidth: 940
    },
    cta: {
        color: '#008BFF',
        textDecoration: 'none',
    },
    copyWrapper: {
        display: 'flex'
    },
    copy: {
        width: '60%'
    },
    speakerSet: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 50
    },
};

const EventCard = ({ classes }) => {
    return (
        <Card className={classes.card} id="event-card">
            <CardContent className={classes.content}>
                <p>Upcoming Events</p>
                <h2>Fighting the Giants: How to Build Products that Beat the Competition</h2>
                <div className={classes.copyWrapper}>
                    <div className={classes.copy}>
                        <p>When</p>
                        <p className="date">February 7th, 2019
                        <br />6PM to 9PM</p>
                        <p>Where</p>
                        <p className="location">Pivotal Software<br />11th Floor, 1 Toronto Street, Toronto</p>
                        <p>Many markets are dominated by a few major players - gigantic competitors with seemingly unlimited resources. Whether you're in FinTech, Insurance, or other industries - understanding how your competitors work is crucial to any product manager. How do we design and build products that can stand up against companies that are already leading the market? Join us as we invite some of Toronto's leading product leaders to share and discuss how they are gearing their teams up to challenge the giants.</p>
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