import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    wrapper: {
        background: '#FFFFFF',
        paddingTop: 50,
        height: 272,
    },
    innerWrapper: {
        maxWidth: 960,
        margin: 'auto',
        textAlign: 'left'
    }
};

const Sponsors = ({ classes }) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.innerWrapper}>
                <p>Sponsors</p>
                <img src="" alt=""/>
            </div>
        </div>
    )
}

export default withStyles(styles)(Sponsors);