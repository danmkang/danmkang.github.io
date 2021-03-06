import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './PartnerCard.css'

const styles = {
    card: {
        maxWidth: `30%`,
        minWidth: 300,
        height: 360,
        textAlign: 'left',
        // float: 'left'
    },
    imgWrapper: {
        textAlign: 'center',
        margin: 'auto',
    },
    img: {
        height: 150,
        margin: 'auto'
    },
    description: {
        color: '#9B9B9B'
    },
    cta: {
        color: '#008BFF',
        textDecoration: 'none'
    }
};

const PartnerCard = ({ classes, title, description, cta, img }) => {
    return (
        <Card className={`${classes.card} PartnerCard-card`}>
            <CardContent>
                <div className={classes.imgWrapper}>
                    <img className={classes.img} src={img} alt={title} />
                </div>
                <p>{title}</p>
                <p className={classes.description} fontSize="small">{description}</p>
                <a className={classes.cta} href="mailto:productgo@protonmail.com?Subject=Partner Inquiry for Product Go">{cta}</a>
            </CardContent>
        </Card >
    )
}

export default withStyles(styles)(PartnerCard);