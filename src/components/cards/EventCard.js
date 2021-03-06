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
                <h3>Previous Events</h3>
                <h2>Fighting the Giants: How to Build Products that Beat the Competition</h2>
                <div className={`${classes.copyWrapper} EventCard-copyWrapper`}>
                    <div className={`${classes.copy} EventCard-copy`}>
                        <p><b>When</b></p>
                        <p className="date">February 7th, 2019
                        <br />6PM to 9PM</p>
                        <p><b>Where</b></p>
                        <p className="location">Pivotal Software<br/>11th Floor, 1 Toronto Street, Toronto</p>
                        <p>Many markets are dominated by a few major players - gigantic competitors with seemingly unlimited resources. Whether you’re in FinTech, Insurance, or other industries - understanding how your competitors work is crucial to any product manager.
                        </p>
                        <p>
                        How do we design and build products that can stand up against companies that are already leading the market? </p>
                        <p>
                        Join us as we invite Breanna Hughes (Director of Product @ League) and Avrum Laurie (Head of Product @ Wealthsimple) to share and discuss how they are gearing their teams up to challenge the giants.</p>
                        <p className='moreInfo'><a className={classes.cta} href="https://www.meetup.com/ProductGo/events/257722891/">More Info</a></p>
                        <p className='buyTix'><a className={classes.cta} href="https://productgofeb2019.eventbrite.ca">Buy Tickets</a></p>
                    </div>
                    <div className={`${classes.speakerSet} EventCard-speakerSet`}>
                        <SpeakerSet />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default withStyles(styles)(EventCard);