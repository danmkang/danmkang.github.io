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
        <div id="main-nav">
        <nav className={classes.headerNav}>
            <p>ProductGo</p>
            <label for="toggle-menu">
                <div className="hamburger-menu">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </label>
            <input type="checkbox" className="toggle" id="toggle-menu" name="toggle-menu" />
            <ul className="menu">
                <li><a href="#events">Events</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#partner">Partner</a></li>
                <li><a href="#sponsors">Sponsors</a></li>
                <li><a href="#contact">Contact</a></li>
                    <li><a href="https://twitter.com/productgo"><img src={twitter} alt="twitter social icon" /></a>
                </li>
                    <li><a href="https://www.linkedin.com/company/productgo"><img src={linkedin} alt="linkedin social icon" /></a>
                </li>
            </ul>
        </nav>
        </div>
    )
}

export default withStyles(styles)(Nav);