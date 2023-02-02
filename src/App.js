import React from 'react'
import DefaultVisitorHome from './components/VisitorForms/DefaultVisitorHome'
import { Routes, Route , useNavigate} from "react-router-dom";
import NewVisitorForm from './components/VisitorForms/NewVisitorForm';
import UpdateProfile from './components/VisitorForms/UpdateProfile';
import {useState } from 'react'
import Header from './components/Header/Header'
import Admin from './components/Admin/Admin'
import Checkin from './components/CheckIn/Checkin';

export default function App() {
  // ==========================App Begin============================
  const [phone, setPhone] = useState('');
  const [visitorData, setVisitorData] = useState(null);
  // const [showUpdateProfile, setShowUpdateProfile] = useState(false);
  const [updatedVisitor, setUpdatedVisitor] = useState({
   name: '',
   phone: '',
   email: '',
   _id: '',
  });
const navigate = useNavigate();
  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };
  //connecting with backend
const url = 'https://mern-backend-yyk6.onrender.com/getVisitor';
  const handleSubmit = async e => {
    e.preventDefault();
    const phoneNumber = parseInt(e.target.phone.value)
    //using axios for api
    // const response = await axios.get(url, { phoneNumber });
    const response= await fetch(url, {
      method:"POST",
      headers: {
          "Content-Type" : "application/json"
      },
      body : JSON.stringify({phone:phoneNumber})
  })

  const data = await response.json()
  const visitor =data.visitor;
    if (visitor) {
      console.log(response)
      
      console.log(data)
     
      setUpdatedVisitor({name:visitor.name, phone:visitor.phone, email:visitor.email, _id:visitor._id})
      setVisitorData(visitor);
      navigate('/create/posts') 
    //  setShowUpdateProfile(true);
    } else {navigate('/create') 
     }
    }
    // navigate('admin')


  return (
    <div className='form'>
  <>
  <Header />
  <Routes>
  
 
      <Route path="/" element={<DefaultVisitorHome handleSubmit={handleSubmit} phone={phone} handlePhoneChange={handlePhoneChange}/>}/>
      <Route path="/create" element={<NewVisitorForm />}/>
      <Route path="/create/posts" element={<UpdateProfile  updatedVisitor={updatedVisitor} setUpdatedVisitor={setUpdatedVisitor} />}/>
      <Route path="/admin" element={<Admin />}/>
      <Route path="/checkin" element={<Checkin />}/>
      
      </Routes>
 </> 
   </div>
    )}
  
  
  // ==========================App End============================
 
