import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
    card: {
        maxWidth: 300,
        height: 360,
        textAlign: 'left',
        float: 'left'
    },
};

const PartnerCard = ({ classes }) => {
    return (
        <Card className={classes.card}>
            <CardContent>
                <p>Partner with us</p>
                <p>Collaborate with ProductGo for future meetups and events</p>
                <a className={classes.cta} href="https://www.meetup.com/ProductGO/">Register for event</a>
            </CardContent>
        </Card >
    )
}

export default withStyles(styles)(PartnerCard);