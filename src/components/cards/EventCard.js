import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = {
    card: { 
        maxWidth: 1000,
        margin: '25px auto'
    },
};

const EventCard = ({ classes }) => {
    
    return (
        <Card className={classes.card}>
            <p>Event Card</p>
            <CardContent>
                <CardActions>
                    <Button size="small">Register for the Event</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default withStyles(styles)(EventCard);