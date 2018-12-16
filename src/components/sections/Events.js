import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import EventCard from '../cards/EventCard';

const styles = {
    eventCard: {
        // color: 'black'
        // margin: auto
        textAlign: 'center',
    },
};


const Events = ({ classes }) => {
    return (
        <EventCard className={classes.eventCard}/>
    )
}

export default withStyles(styles)(Events);