import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import sprintlio from '../../assets/sprintlio-logo.png';

const styles = {
    wrapper: {
        background: '#FFFFFF',
        paddingTop: 50,
        height: 272
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
        <div className={classes.wrapper}>
            <div className={classes.innerWrapper}>
                <p>Sponsors</p>
                <img className={classes.sponsorLogo} src={sprintlio} alt=""/>
            </div>
        </div>
    )
}

export default withStyles(styles)(Sponsors);