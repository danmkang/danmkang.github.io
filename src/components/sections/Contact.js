import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    wrapper: {
        background: '#464646',
        paddingTop: 50,
        height: 272,
        color: 'white'
    },
    innerWrapper: {
        maxWidth: 940,
        margin: 'auto',
        textAlign: 'left'
    }
};

const Contact = ({ classes }) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.innerWrapper}>
                <p>Contact us</p>
                <p>Email us at example@gmail.com for any questions about upcoming meetups or sponsorships and we will be sure to reach out to you!</p>
                <img className={classes.logo} alt=""/>
            </div>
        </div>
    )
}

export default withStyles(styles)(Contact);