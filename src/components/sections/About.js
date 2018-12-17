import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = {
    wrapper:{
        background: '#F4F4F4',
        height: 500
    },
    copy: {
        maxWidth: 940,
        margin: 'auto',
        paddingTop: 150,
        textAlign: 'left',
        // clearfix
        overflow: 'auto'
    },
    cta: {
        color: '#008BFF',
        float: 'right',
        textDecoration: 'none'
    }
}

const About = ({ classes }) => {
    return (
        <div className={classes.wrapper}>            
            <div className={classes.copy}>
                <p>About Us</p>
                <p>ProductGo is a meetup where Torontos digital product development professionals can learn from our best product leaders. Each meetup will have panel discussions with a wide variety of product leaders that shape the direction of Toronto's fastest-growing technology companies. </p>
                <a className={classes.cta} href="https://www.meetup.com/ProductGO/">Visit Meetup Page</a>
            </div>
        </div>
    )
}

export default withStyles(styles)(About)