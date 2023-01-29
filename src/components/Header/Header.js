import React from "react";
import { Container, AppBar, Typography } from '@material-ui/core';
import images from '../../images/pic.jfif';
import useStyles from './styles';


export default function Header() {
    const classes = useStyles();
    
    return (

      <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
     
     <Typography className={classes.heading}
     variant="h2" align="center">Welcome To Activate Works</Typography>
      <img className={classes.image} src={images} alt="pic" height="60" />
      </AppBar>

  </Container>
  
      )
  }
   