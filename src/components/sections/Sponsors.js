import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import sprintlio from '../../assets/sprintlio-logo.png';
import productfaculty from '../../assets/product-faculty-logo.jpg';
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
        margin: 'auto',
        maxWidth: 250,
        paddingTop: 25
    },
};

const Sponsors = ({ classes }) => {
    return (
        <div id="sponsors" className={classes.wrapper}>
            <div className={`${classes.innerWrapper} Sponsors-innerWrapper`}>
                <h3>Sponsors</h3>
                <div className='sponsor-logos'>
                    <a href="https://sprintlio.com/?ref=productgo">
                        <img className={`${classes.sponsorLogo} Sponsors-sponsorLogo`} src={sprintlio} alt="" />
                    </a>
                    <a href="http://www.productfaculty.com/">
                        <img className={`${classes.sponsorLogo} Sponsors-sponsorLogo`} src={productfaculty} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(Sponsors);