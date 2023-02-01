import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
const[data, setData] = useState(null)
const [deleted, setDeleted] = useState(false)
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/allVisitor');
        setData(res.data);
        // console.log(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [deleted]);
  console.log(data)
  const deleteVisitor = (id) =>{
    axios.delete(`http://localhost:5000/deleteVisitor/${id}`).then(()=>{setDeleted(!deleted)})
    
  }
  if (!data) {
    return <p>Loading...</p>;
  }
  return (

    
<div className='VisitorLog'>
        {data.map((data) => 
<div onClick={()=>{deleteVisitor(data._id)}}>
<p>{data.name}</p>
<p>{data.phone}</p>
<p>{data.email}</p>
</div>
)}
</div>
  )
}
