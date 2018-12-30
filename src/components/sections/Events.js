import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import EventCard from '../cards/EventCard';

const styles = {
    wrapper: {
        marginTop: '-150px',
        paddingBottom: 25
    },
    eventCard: {
        textAlign: 'center',
    },
    
};


const Events = ({ classes }) => {
    return (
        <div id="events" className={classes.wrapper}>
            <EventCard className={classes.eventCard}/>
        </div>
    )
}

export default withStyles(styles)(Events);