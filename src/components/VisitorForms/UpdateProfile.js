
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, FormLabel, Grid, Typography, Card, CardContent } from '@material-ui/core';


export default function UpdateProfile({userData, updatedVisitor, setUpdatedVisitor}) {

   const url = 'http://localhost:5000/updateVisitor'; 
 
const navigate = useNavigate();
console.log(updatedVisitor._id)
  //update the visitor
  const updateVisitor = (e) => {
e.preventDefault();

axios.put(`${url}/${updatedVisitor._id}`, updatedVisitor).then((res)=> {navigate('/checkin')}).catch((error)=> {console.log('error')})
  }


return ( 

  <div className="Form validatedForm"> 
  <Typography gutterBottom variant="h3" align="center">
 Please Update Your Profile If Any Change
   </Typography>
  <Grid>
    <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
      <CardContent>
    
        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
        Please Update your Profile
      </Typography> 
 
<form  onSubmit={updateVisitor}>

<Grid container spacing={1}>
    <Grid xs={12} sm={6} item>
  <FormLabel>Name:</FormLabel>
  <TextField type='text' name='name' placeholder='Enter your name' variant='outlined' value={updatedVisitor.name} fullwidth='true' required onChange={(e) => setUpdatedVisitor({ ...updatedVisitor, name: e.target.value })}  />
  </Grid>

  <Grid xs={12} sm={6} item>
  <FormLabel>Phone:</FormLabel>
  <TextField type='number' name='phone' placeholder='Enter your phone number' variant='outlined'value={updatedVisitor.phone} fullwidth='true'  required onChange={(e) =>setUpdatedVisitor({ ...updatedVisitor, phone: e.target.value })} />
  </Grid>
  <Grid item xs={12}>
  <FormLabel>email:</FormLabel>
  <TextField type='email'name='email' placeholder='Enter your email'variant='outlined' value={updatedVisitor.email} fullwidth='true' required  onChange={(e) => setUpdatedVisitor({ ...updatedVisitor, email: e.target.value })} />
  </Grid>
 
<button type='submit' >Submit</button>
<button type='button'>Clear</button>
{/* {submitted && <p>Form submitted!</p>} */}

</Grid>
</form>
</CardContent>
 </Card>
 </Grid>
   
  </div>






//   <div style={{width: '90%', textAlign: 'center', margin:'auto auto'}}>
//     <h1>Visitor Logsheet</h1>
//     <Button onClick={()=> setOpen(true)}> Log Sheet </Button>
//     <Button>BACK</Button>

//     <Modal
//   open={open}
//   onClose={handleClose}
//   hideBackdrop
//   aria-labelledby="Update Visitor"
//   aria-describedby="modal-modal-description"
// >
//   <Box sx={style} position='absolute' top='50%' left='50%'>
//     {/* <Typography id="modal-modal-title" variant="h6" component="h2" placeholder='Name'>
//      Name:
//     </Typography>
//     <Typography id="modal-modal-title" variant="h6" component="h2" placeholder='phone' sx={{ mt: 2 }}>
//      Phone:
//     </Typography>
//     <Typography id="modal-modal-title" variant="h6" component="h2" placeholder='eamil' sx={{ mt: 2 }}>
//     Email:
//     </Typography> */}
   
//     <Button  
//                     variant="contained"
//                     onClick={() => updateVisitor(data._id, data.email, data.name, data.phone)}
//                     style={{ width: "100%", marginRight: "1rem" }}
//                     color='default'>
//                       UPDATE
//     </Button>               
//     <Button
//                     onClick={() => deleteVisitor(data._id)}
//                     variant="contained"
//                     style={{ width: "100%" }}
//                     color='default'>
//                       DELETE
//     </Button>
//   </Box>
// </Modal>

// {data ? (
//       <>
//  {data.map( d => {
//   return (
//     <div  style={{
//       marginBottom: "1rem",
//       border: "solid lightgray 1px",
//       borderRadius: "8px",
//     }}
//     key={d._id}>
//   <ul> 
//   <li key={d._id}>{d.name} 
//   </li>
//    <li key={d.email}>{d.email} 
//    </li>
//     <li key={d.phone}>{d.phone} 
//     </li>
//     </ul>
//     <div style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     justifyContent: "space-between",

//                     padding: "1rem",
//                   }}>
   
//     </div>
//     </div>
    
//  )}
//  )}
//    </>
//    ):""}
   
//   </div>
   )}

