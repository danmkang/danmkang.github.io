import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = {
    layout: {
        maxWidth: 940,
        margin: 'auto',
        textAlign: 'left',
    },

    cta: {
        color: '#008BFF',
        float: 'right',
    }
    
}

const About = ({ classes }) => {
    return (
        <div className={classes.layout}>
            <p>About Us</p>
            <p>ProductGo is a meetup where Torontos digital product development professionals can learn from our best product leaders. Each meetup will have panel discussions with a wide variety of product leaders that shape the direction of Toronto's fastest-growing technology companies. </p>
            <a className={classes.cta}>Visit Meetup Page</a>
        </div>
    )
}

export default withStyles(styles)(About)