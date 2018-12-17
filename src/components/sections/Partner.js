import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PartnerCard from '../cards/PartnerCard';

const styles = {
    wrapper: {
        background: '#AFD4BF',
        paddingTop: 150,
        height: 500,
    },
    innerWrapper: {
        background: '#AFD4BF',
        maxWidth: 940,
        margin: 'auto',
        // clearfix
        overflow: 'auto'
    }
};

const Partner = ({ classes }) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.innerWrapper}>
            <PartnerCard />
            <PartnerCard />
            <PartnerCard />
            </div>
        </div>
    )
}

export default withStyles(styles)(Partner);