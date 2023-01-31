import React, { useState, useEffect } from 'react'
import axios from 'axios';
import style from './styles';
import { Button, Box, Modal } from '@material-ui/core';
// import { useNavigate } from 'react-router-dom';
// import VisitorForm from '../VisitorForm/VisitorForm'


export default function UpdateProfile() {
  // const navigate = useNavigate();
  // const url = 'http://localhost:5000/visitors'; 
  const [data, setData] = useState('');
  const [updatedVisitor, setUpdatedVisitor] = useState({
     
    name: "",
   phone: "",
   email: "",
   
  });
  //Using Modal from material ui
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/getVisitor');
        setData(res.data);
        console.log(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  console.log(data)
  if (!data) {
    return <p>Loading...</p>;
  }
//Delete the visitor
  const deleteVisitor= (id) => {
    console.log(id);

    axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    window.location.reload();
  };

  //update the visitor
  const updateVisitor = (data) => {
    setUpdatedVisitor(data);
  // console.log(data)
  handleOpen();
  }


return ( 
  <div style={{width: '90%', textAlign: 'center', margin:'auto auto'}}>
    <h1>Visitor Logsheet</h1>
    <Button onClick={()=> setOpen(true)}> Log Sheet </Button>
    <Button>BACK</Button>

    <Modal
  open={open}
  onClose={handleClose}
  hideBackdrop
  aria-labelledby="Update Visitor"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} position='absolute' top='50%' left='50%'>
    {/* <Typography id="modal-modal-title" variant="h6" component="h2" placeholder='Name'>
     Name:
    </Typography>
    <Typography id="modal-modal-title" variant="h6" component="h2" placeholder='phone' sx={{ mt: 2 }}>
     Phone:
    </Typography>
    <Typography id="modal-modal-title" variant="h6" component="h2" placeholder='eamil' sx={{ mt: 2 }}>
    Email:
    </Typography> */}
   
    <Button  
                    variant="contained"
                    onClick={() => updateVisitor(data._id, data.email, data.name, data.phone)}
                    style={{ width: "100%", marginRight: "1rem" }}
                    color='default'>
                      UPDATE
    </Button>               
    <Button
                    onClick={() => deleteVisitor(data._id)}
                    variant="contained"
                    style={{ width: "100%" }}
                    color='default'>
                      DELETE
    </Button>
  </Box>
</Modal>

{data ? (
      <>
 {data.map( d => {
  return (
    <div  style={{
      marginBottom: "1rem",
      border: "solid lightgray 1px",
      borderRadius: "8px",
    }}
    key={d._id}>
  <ul> 
  <li key={d._id}>{d.name} 
  </li>
   <li key={d.email}>{d.email} 
   </li>
    <li key={d.phone}>{d.phone} 
    </li>
    </ul>
    <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",

                    padding: "1rem",
                  }}>
   
    </div>
    </div>
    
 )}
 )}
   </>
   ):""}
   
  </div>
  )}

