import React from 'react';
import { withStyles } from '@material-ui/core';
import './about.css';

const styles = {
    wrapper:{
        background: '#F4F4F4',
        height: 'auto'
    },
    copy: {
        maxWidth: 940,
        margin: 'auto',
        paddingTop: 100,
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
        <div id="about" className={classes.wrapper} >            
            <div className={`${classes.copy} About-copy`}>
                <h3>About Us</h3>
                <p>ProductGo is an organization dedicated to bringing together Toronto's product leaders to share their experiences and ideas to help push the boundaries of product management. Our goal as a meetup group is provide industry experts a venue to give insights and challenge each other via panels, while giving our members an opportunity to learn, network, and relax in a safe and open environment. We believe in thought-provoking discussions that will further connect the Toronto product community. </p>
                <a className={classes.cta} href="https://www.meetup.com/ProductGO/">Visit Meetup Page</a>
            </div>
        </div>
    )
}

export default withStyles(styles)(About)