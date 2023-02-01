import React from 'react'
import DefaultVisitorHome from './components/VisitorForms/DefaultVisitorHome'
import { Routes, Route , useNavigate} from "react-router-dom";
import NewVisitorForm from './components/VisitorForms/NewVisitorForm';
import UpdateProfile from './components/VisitorForms/UpdateProfile';
import {useState } from 'react'
import Header from './components/Header/Header'
export default function App() {
  // ==========================App Begin============================
  const [phone, setPhone] = useState('');
  const [visitorData, setVisitorData] = useState(null);
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);
  const [updatedVisitor, setUpdatedVisitor] = useState({
   name: '',
   phone: '',
   email: '',
  });
const navigate = useNavigate();
  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };
  //connecting with backend
const url = 'http://localhost:5000/getVisitor';
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
    console.log(response)
    const data = await response.json()
    console.log(data)
    const visitor =data.visitor;
    setUpdatedVisitor({name:visitor.name, phone:visitor.phone, email:visitor.email})
    setVisitorData(visitor);
    if (visitor) {
      navigate('/create/posts') 
    //  setShowUpdateProfile(true);
    } else {navigate('/create') 
     }
    }

  return (
    <div>
  <>
  <Header />
  <Routes>
  
 {/* <<Header />> */}
 {/* <DefaultVisitorHome /> */}
        <Route path="/" element={<DefaultVisitorHome handleSubmit={handleSubmit} phone={phone} handlePhoneChange={handlePhoneChange}/>}/>
      <Route path="/create" element={<NewVisitorForm />}/>
      <Route path="/create/posts" element={<UpdateProfile  updatedVisitor={updatedVisitor} setUpdatedVisitor={setUpdatedVisitor} />}/>
      </Routes>
 </> 
   </div>
    )
  // ==========================App End============================
  }
 
