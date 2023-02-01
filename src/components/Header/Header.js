import React from "react";
import { Container, AppBar, Typography } from '@material-ui/core';
import images from '../../images/pic.jfif';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';



export default function Header() {
    const classes = useStyles();
    const navigate = useNavigate();
    
    return (

      <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
     
     <Typography className={classes.heading}
     variant="h2" align="center">Welcome To Activate Works</Typography>
      <img className={classes.image} src={images} alt="pic" height="60" />
      <div>
<button className='button2' onClick={()=>{navigate('/admin')}}>Admin-View</button>
    </div> 
      </AppBar>

  </Container>
  
      )
  }
   