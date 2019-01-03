import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import sprintlio from '../../assets/sprintlio-logo.png';
import './sponsors.css';

const styles = {
    wrapper: {
        background: '#FFFFFF',
        height: 'auto',
    },
    innerWrapper: {
        maxWidth: 940,
        margin: 'auto',
        textAlign: 'left'
    },
    sponsorLogo: {
        display: 'flex',
        margin: 'auto'
    },
};

const Sponsors = ({ classes }) => {
    return (
        <div id="sponsors" className={classes.wrapper}>
            <div className={classes.innerWrapper}>
                <p>Sponsors</p>
                <a href="https://sprintlio.com/?ref=productgo">
                    <img className={classes.sponsorLogo} src={sprintlio} alt="" />
                </a>
            </div>
        </div>
    )
}

export default withStyles(styles)(Sponsors);