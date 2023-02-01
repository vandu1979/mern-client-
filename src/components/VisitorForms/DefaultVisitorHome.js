import React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'

// import { useNavigate } from 'react-router-dom';

const Phone = ({handleSubmit, phone, handlePhoneChange}) => {
 


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
    <div>
<button className='button2' type="submit" align="right">Admin-View</button>
    </div> 
    </> 

  );
};

export default Phone;




