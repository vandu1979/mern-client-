import React from 'react';

import images from '../../images/Activate-Work-Logo.png'
import images2 from '../../images/pexels-pixabay-270348.jpg'

import { useNavigate } from 'react-router-dom';

const Phone = ({handleSubmit, phone, handlePhoneChange}) => {
 const navigate = useNavigate();


  return (
  <>
    <div className='HomePage'>
      <form class="w3-container"onSubmit={handleSubmit}>
      Please Enter Your Phone Number
        <input
          type="tel"
          // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name="phone"
          value={phone}
          onChange={handlePhoneChange}
          class=" w3-input w3-border w3-round w3-light-grey "
         
        />
        <button  className='button' type="submit">Check-In</button>
        
        {/* <Link to="/UpdateProfile"><button type='submit'>Check-In</button></Link> */}
      </form>
      
    </div>
    <img className='coding' src={images2} alt="pic"/>
    
    <img className='bottom-right' src={images} alt="pic1"/> 
    <div> 
<button className='button2' onClick={()=>{navigate('/admin')}}>Admin-View</button>
    </div> 
 
    </> 

  );
};

export default Phone;




