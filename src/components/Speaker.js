import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './speaker.css';

const styles = {
    wrapper: {
        display: 'flex',
        paddingTop: 25,
    },
    imgWrapper: {
        borderRadius: '50%'
    },
    img: {
        width: 70,
        borderRadius: '50%'
    },
    copy: {
        fontSize: 8,
        paddingLeft: 30,
        paddingTop: 5,
    }
};

const Speaker = ({ classes, img, name, title, company}) => {
    return (
        <div className={`${classes.wrapper} Speaker-wrapper`}>
            <div className={classes.imgWrapper}>
                <img className={`${classes.img} Speaker-img`} src={img} alt={`Headshot of ${name}`} />
            </div>
            <div className={`${classes.copy} Speaker-copy`}>
                <p>{name}</p>
                <p>{title}</p>
                <p>{company}</p>
            </div>
        </div>
    )
}

export default withStyles(styles)(Speaker);