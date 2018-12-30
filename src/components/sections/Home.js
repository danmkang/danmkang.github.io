import React from 'react';
import { withStyles } from '@material-ui/core';
import Nav from '../Nav';
import heroGradient from '../../assets/hero-gradient-cut.png'
import headerLogo from '../../assets/header-logo.png'

const styles = {
    wrapper: {
        backgroundImage: `url(${heroGradient})`,
        backgroundSize: 'cover',
        height: 880,
        margin: 'auto',
        textAlign: 'left',
    },
    copy: {
        maxWidth: 940,
        margin: 'auto',
        paddingTop: 225
    },
    headerLogo: {
        width: 250
    }
}

const Home = ({ classes }) => {
    return (
        <div id="home" className={classes.wrapper}>
            <Nav />
            <div className={classes.copy}>
                <img className={classes.headerLogo} src={headerLogo} alt=""/>
                <h1>ProductGo</h1>
                <p>Toronto based meetups for Product Managers</p>
            </div>
        </div>
    )
}

export default withStyles(styles)(Home)
