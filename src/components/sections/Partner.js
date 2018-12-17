import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PartnerCard from '../cards/PartnerCard';

const styles = {
    wrapper: {
        background: '#AFD4BF',
        height: 500,
        display: 'flex',
        alignContent: 'center'    
    },
    innerWrapper: {
        background: '#AFD4BF',
        maxWidth: 940,
        margin: 'auto',
        // clearfix
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
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