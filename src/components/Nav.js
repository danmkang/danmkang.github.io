import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import linkedin from '../assets/linkedin-logo.png';
import twitter from '../assets/twitter-logo.png';
import './nav.css';

const styles = {
    wrapper: {
        display: 'flex',
        paddingTop: 25,
    },
}

const Nav = ({ classes }) => {
    return (
        <nav className={classes.headerNav}>
            <p>ProductGo</p>
            <ul>
                <li><a href="#events">Events</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#partner">Partner</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href=""><img src={twitter} alt="twitter social icon" /></a>
                </li>
                <li><a href=""><img src={linkedin} alt="linkedin social icon" /></a>
                </li>
            </ul>
        </nav>
    )
}

export default withStyles(styles)(Nav);