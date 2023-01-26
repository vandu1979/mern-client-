import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import pic from './images/pic.jfif'
import useStyles from './styles';

export default function App() {
  const classes = useStyles();
  return (
    <Container maxwidth="lg">
    <AppBar className={classes.appBar} position="static" color="inherit">
   
   <Typography className={classes.heading}
   variant="h2" align="center">Activate Works</Typography>
    <img className={classes.image} src={pic} alt="pic" height="60" />
    </AppBar>
    <Grow in>
        <Container>
            <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                  <Posts />
                    {/* <Posts setCurrentId={setCurrentId}/> */}
                    </Grid>
                    
                
                <Grid item xs={12} sm={4}>
                    {/* <Form currentId={currentId} setCurrentId={setCurrentId} /> */}
                    <Form />
                    </Grid>
            </Grid>
        </Container>

    </Grow>
</Container>
    )
}
 
