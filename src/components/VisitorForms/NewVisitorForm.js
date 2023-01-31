
import React, { useState, useRef } from 'react'
import { TextField, FormLabel, Grid, Typography, Card, CardContent } from '@material-ui/core';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom'
export default function NewVisitorForm() {
  // const classes = useStyles();
  // const navigate = useNavigate();
  const[userData, setUserData] = useState({
    name:'',
    phone:'',
    email:'',
   })
  const [submitted, setSubmitted] = useState(false);
  // useEffect(()=>{console.log(userData);
  // }, [userData])
  
  const url = 'http://localhost:5000/createVisitor'; 
 
  //req to connect to backend using axios for API and Create post also
  const handleSubmit = (e) => {
   e.preventDefault()
  
   axios.post(url, userData)
   .then((res) => console.log(res))
   .catch((err) => console.log(err));
   alert("Form submitted successfully. Name: " + userData.name);
  //  window.location.reload();
  setSubmitted(true);
  }
  const formRef = useRef(null);
  const handleClear = () => {
    formRef.current.reset();
    setSubmitted(false);
};
  console.log(userData);
  return (
    <div className="Form"> 
    <Typography gutterBottom variant="h3" align="center">
    Welcome 
     </Typography>
    <Grid>
      <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
        <CardContent>
      
          <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
           All visitors please fill up the form 
        </Typography> 
   
 <form ref={formRef} onSubmit={handleSubmit}>
 
  <Grid container spacing={1}>
      <Grid xs={12} sm={6} item>
    <FormLabel>Name:</FormLabel>
    <TextField type='text' name='name' placeholder='Enter your name' variant='outlined' fullwidth='true' required onChange={(e) => setUserData({ ...userData, name: e.target.value })}  />
    </Grid>
  
    <Grid xs={12} sm={6} item>
    <FormLabel>Phone:</FormLabel>
    <TextField type='number' name='phone' placeholder='Enter your phone number' variant='outlined' fullwidth='true'  required onChange={(e) => setUserData({ ...userData, phone: e.target.value })} />
    </Grid>
    <Grid item xs={12}>
    <FormLabel>email:</FormLabel>
    <TextField type='email'name='email' placeholder='Enter your email'variant='outlined' fullwidth='true' required  onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
    </Grid>
    {/* <Grid item xs={12}>
    <FormLabel>Date:</FormLabel>
    <TextField type='number'name='date' placeholder='Enter date' variant='outlined' fullwidth='true' required  onChange={(e) => setUserData({ ...userData, date: e.target.value })}  />
    </Grid> */}
    {/* <Grid item xs={12}>
    <FormLabel>Time:</FormLabel>
    <TextField type='number'name='time' placeholder='Enter In time' variant='outlined' fullwidth='true' required onChange={(e) => setUserData({ ...userData, time: e.target.value })} />
    </Grid> */}
  <button type='submit' >Submit</button>
  <button type='button' onClick={handleClear}>Clear</button>
  {submitted && <p>Form submitted!</p>}
 
  </Grid>
</form>
</CardContent>
   </Card>
   </Grid>
     
    </div>
  )
}