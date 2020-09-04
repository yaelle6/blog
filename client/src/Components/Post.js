import React from 'react';
import { makeStyles, Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});


export default function Post (props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
            {/* { (props.image !== "null" && props.image !== "undefined" && props.image !== undefined && props.image !== null ) ? <CardMedia image={props.image} title={props.image}/> : ''} */}
                <Typography variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.author}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.text}
                </Typography>
            </CardContent>
        </Card>

    )
}