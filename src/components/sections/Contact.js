import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import footerLogo from '../../assets/footer-logo.png';
import linkedin from '../../assets/linkedin-logo.png';
import twitter from '../../assets/twitter-logo.png';
import './contact.css';

const styles = {
    wrapper: {
        background: '#464646',
        height: 'auto',
        color: 'white'
    },
    innerWrapper: {
        maxWidth: 940,
        margin: 'auto',
        textAlign: 'left'
    },
    footer:{
        display: 'flex',
        alignItems: 'center'
    },
    social:{
        paddingRight: 20
    },
    footerLogo:{
        width: `30%`,
        marginLeft: 50
    },
    cta: {
        textDecoration: 'none',
        color: 'white'
    }
};

const Contact = ({ classes }) => {
    return (
        <div id="contact" className={classes.wrapper}>
            <div className={`${classes.innerWrapper} Contact-innerWrapper`}>
                <p>Contact us</p>
                <div className={`${classes.footer} Contact-footer`}>
                    <div className={classes.copy}>
                        <p>Email us at <a className={classes.cta} href="mailto:productgo@protonmail.com?Subject=Inquiry for Product Go">productgo@protonmail.com</a> for any questions about upcoming meetups or sponsorships and we will be sure to reach out to you!</p>
                        <a href="https://twitter.com/productgo"><img className={`${classes.social} Contact-social`} src={twitter}  alt="twitter social icon" /></a>
                        <a href="https://www.linkedin.com/company/productgo"><img className={`${classes.social} Contact-social`} src={linkedin} alt="linkedin social icon" /></a>
                    </div>
                    <img src={footerLogo} className={`${classes.footerLogo} Contact-footerLogo`} alt="ProductGo Logo in green" />
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(Contact);