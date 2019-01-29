import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
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
            <label htmlFor="toggle-menu">
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
                <li><a href="https://twitter.com/productgo"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="https://www.linkedin.com/company/productgo"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
        </nav>
        </div>
    )
}

export default withStyles(styles)(Nav);