import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import UpdateProfile from './UpdateProfile';
import NewVisitorForm from './NewVisitorForm';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Phone = ({handleSubmit, phone, handlePhoneChange}) => {
 


  return (
    <div>
      <form onSubmit={handleSubmit}>
      Enter Your Phone Number
        <input
          type="tel"
          // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name="phone"
          value={phone}
          onChange={handlePhoneChange}
        />
        <button type="submit">Check-In</button>
        {/* <Link to="/UpdateProfile"><button type='submit'>Check-In</button></Link> */}
      </form>
      {/* {showUpdateProfile ? (
        <UpdateProfile visitorData={visitorData} />
      ) : (
        <NewVisitorForm phone={phone} />
      )} */}
    </div>
  );
};

export default Phone;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import UpdateProfile from './UpdateProfile';
// import NewVisitorForm from './NewVisitorForm';
// import Header from '../Header/Header'

// export default function PhoneCheckIn() {
//   const [phone, setPhone] = useState('');
//   const [visitorData, setVisitorData] = useState({});
//   const [showUpdateProfile, setShowUpdateProfile] = useState(false);
//   const [showNewVisitorForm, setShowNewVisitorForm] = useState(false);

//   const checkInUrl = 'http://localhost:5000/checkIn'; 

//   function handleChange(e) {
//     setPhone(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     axios.post(checkInUrl, { phone })
//       .then(res => {
//         if (res.data) {
//           setVisitorData(res.data);
//           setShowUpdateProfile(true);
//         } else {
//           setShowNewVisitorForm(true);
//         }
//       })
//       .catch(err => console.error(err));
//   }

//   return (
//     <div>
     
//       <form onSubmit={handleSubmit}>
//         <label>
//           Phone Number:
//           <input
//             type="number"
//             name="phone"
//             value={phone}
//             onChange={handleChange}
//           />
//         </label>
//         <button type="submit">Check-In</button>
//       </form>
//       {showUpdateProfile && <UpdateProfile visitorData={visitorData} />}
//       {showNewVisitorForm && <NewVisitorForm phone={phone} />}
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Header from '../Header/Header'
// import {useNavigate} from 'react-router-dom'

// export default function Phone() {
//   const navigate = useNavigate();
//   const [phone, setPhone] = useState('');
//   const [visitorData, setVisitorData] = useState({});

//   const url = 'http://localhost:5000/getVisitor'; 

//   useEffect(() => {
//     axios.get(url, phone )
//       .then(res => visitorData(res.data))
//       .catch(err => console.error(err));
//   }, [phone]);

//   function handleChange(e) {
//     e.preventDefault();
//     setVisitorData(e.target.value);
  
//   }

//   return (
//     <div>
//       <Header />
//       Enter Your Phone Number
//       <><input
//       type='number'
//       name='phone'
//       onChange={handleChange}
//       value={phone} />
//       </>

//       <button type='submit' onClick={()=> navigate('VisitorForm')}>
//         {phone ?  navigate('VisitorForm') : navigate('CreateVisitorProfile')}Check-In</button>
   
        
     
//     </div>
//   );
// }



// const FormButton = () => {
//   const [showForm, setShowForm] = useState(false);
 
//   const handleClick = () => {
//     setShowForm(!showForm);
//   };
 
//   return (
//     <div>
//       <Header />
//       {/* <Admin /> */}
   
//       <Button  type='submit'  variant='contained' size='large' color='inherit' fullWidth onClick={handleClick}>
//         {showForm ? 'Hide Form' : 'Check-In'}
//       </Button>
      
//       {showForm && <Form />
        
//        }
//     </div>
//   );
// };
 
// export default FormButton;


