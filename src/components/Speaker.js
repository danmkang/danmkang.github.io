import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    wrapper: {
        padding: 5
    },
};

const Speaker = ({ classes }) => {
    return (
        <div className={classes.wrapper}>
            <p>Full name</p>
            <p>Title</p>
            <p>Company</p>
        </div>
    )
}

export default withStyles(styles)(Speaker);