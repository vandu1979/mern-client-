import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
const[data, setData] = useState(null)
const [deleted, setDeleted] = useState(false)
  const navigate = useNavigate();  
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
    if (window.confirm('Are you sure you want to delete this visitor?')) {
    axios.delete(`http://localhost:5000/deleteVisitor/${id}`).then(()=>
    {setDeleted(!deleted)})
    }
  }
  if (!data) {
    return <p>Loading...</p>;
  }
  return (
<>
    
<div className='VisitorLog'>
  <table>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th></th>
        </tr>
        {data.map((data) => {
          return (
            <>
             <tr>
            <td>{data.name}</td>
            <td>{data.phone}</td>
            <td>{data.email}</td>
            <td><div onClick={()=>{deleteVisitor(data._id)}}><button className='delete-button'>DELETE</button></div></td>
          </tr>
</>
)}
)}
</table>
</div>
<div> 
<button className='button3' onClick={()=>{navigate('/')}}>HomePage</button>
</div> 
 
</>
  )
}
