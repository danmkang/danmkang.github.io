import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './partner.css';
import PartnerCard from '../cards/PartnerCard';
import partnerData from '../../datasets/partnerData';

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
        <div id="partner" className={classes.wrapper}>
            <div className={`${classes.innerWrapper} Partner-innerWrapper`}>
            {partnerData.map((card, i) => {
                return (<PartnerCard
                    title={card.title}
                    description={card.description}
                    cta={card.cta}
                    img={card.img}
                    key={`card-${i}`}
                />)
            })}
            </div>
        </div>
    )
}

export default withStyles(styles)(Partner);