import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import footerLogo from '../../assets/footer-logo.png';
import linkedin from '../../assets/linkedin-logo.png';
import twitter from '../../assets/twitter-logo.png';

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
    }
};

const Contact = ({ classes }) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.innerWrapper}>
                <p>Contact us</p>
                <div className={classes.footer}>
                    <div className={classes.copy}>
                        <p>Email us at <span>example@gmail.com</span> for any questions about upcoming meetups or sponsorships and we will be sure to reach out to you!</p>
                        <a href=""><img className={classes.social} src={twitter}  alt="twitter social icon" /></a>
                        <a href=""><img className={classes.social} src={linkedin} alt="linkedin social icon" /></a>
                    </div>
                    <img src={footerLogo} className={classes.footerLogo} alt="ProductGo Logo in green" />
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(Contact);