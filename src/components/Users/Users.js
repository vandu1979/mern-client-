import React, { useState } from 'react';
// import Admin from '../Admin/Admin'
import Form from '../Form/Form'
import Header from '../Header/Header'
import { Button } from '@material-ui/core';
 
const FormButton = () => {
  const [showForm, setShowForm] = useState(false);
 
  const handleClick = () => {
    setShowForm(!showForm);
  };
 
  return (
    <div>
      <Header />
      {/* <Admin /> */}
   
      <Button  type='submit'  variant='contained' size='large' color='inherit' fullWidth onClick={handleClick}>
        {showForm ? 'Hide Form' : 'Check-In'}
      </Button>
      
      {showForm && <Form />
        
       }
    </div>
  );
};
 
export default FormButton;


