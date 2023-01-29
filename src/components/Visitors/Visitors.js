import React, { useState, useEffect } from 'react'
// import useStyles from './styles';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { Modal } from '@mui/material'
export default function Visitors() {
  const navigate = useNavigate();
  // const url = 'http://localhost:5000/visitors'; 
  
  const [data, setData] = useState([]);
  const [updatedVisitor, setUpdatedVisitor] = useState({
      id: "",
    name: "",
   phone: "",
   email: "",
    time: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/visitors');
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
return ( 
  <div >
    <h1>Visitor Logsheet</h1>
    <Button onClick={()=> navigate(-1)}>BACK</Button>
    {Visitors ? (
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
    <li key={d.date}>{d.date} 
    </li>
    <li key={d.time}>{d.time} 
    </li>
    </ul>
    <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",

                    padding: "1rem",
                  }}>
    <Button  
     variant="outline-info"
                    // onClick={() =>
                    //   updatevisitor(d._id, d.name, d.email, d.date,d.time)
                    // }
                    style={{ width: "100%", marginRight: "1rem" }}>UPDATE</Button>
    <Button
     onClick={() => deleteVisitor(d._id)}
     variant="outline-danger"
     style={{ width: "100%" }}>
      DELETE</Button>
    </div>
    </div>
    
 )}
 )}
   </>
   ):""}
   
  </div>
  )}

