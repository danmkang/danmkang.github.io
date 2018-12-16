import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const styles = {
    card: { 
        maxWidth: 1000,
        margin: '25px auto'
    },
    cta: {
        color: '#008BFF',
        textDecoration: 'none'
    }
};

const EventCard = ({ classes }) => {
    
    return (
        <Card className={classes.card}>
            <p>Event Card</p>
            <CardContent>
                <CardActions>
                    <a className={classes.cta} href="">Register for event</a>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default withStyles(styles)(EventCard);