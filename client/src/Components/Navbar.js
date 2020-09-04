import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'space-around'
    },
    button: {
      marginRight: theme.spacing(7),
    },
    title: {
        textDecoration: 'none',
        color: 'white'
    },
  }));

const Navbar = () =>{
    const classes = useStyles();
    return(
        <AppBar id='navbar'>
            <Toolbar className={classes.root}>
                <Button className={classes.button}>
                    <Link to={'/'} className={classes.title}>Home Page</Link>
                </Button>
                <Button className={classes.button}>
                    <Link to={'/posts/add'} className={classes.title}>New Post</Link>
                </Button>
                <Button className={classes.button}>
                    <Link to={'/connexion'} className={classes.title}>Connexion</Link>
                </Button>
                <Button className={classes.button}>
                    <Link to={'/profile'} className={classes.title}>Profile</Link>
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar