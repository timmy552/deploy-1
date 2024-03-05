import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./form.css"

const Form = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    // Your form fields here
    firstname: '',
    middlename: '',
    lastname: '',
    ssn: '',
    dob: '',
    phonenumber: '',
    username: '',
    email: ""
  
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitFunction = async (e) => {
    e.preventDefault();
   

    try {
      const response = await fetch('http://localhost:2000/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        body: JSON.stringify(formData),
      });

     
      if (response.ok || response.status === 200) {
        setError('Success')
        navigate('/login')
      }
      else{
        setError('details incorrect')
        console.log("Details already exist")
      }


      // Handle the successful response, if needed
      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      // Handle errors here
      console.error('Error:', error.message);
    }
}
  return (
    <div className='parent2'>
      <div className="formholder2">
  <form className='info' action="" onSubmit={handleSubmitFunction}>
    <h1>please put in your information</h1>
    <div className="createHolder">
      <div className="sec">
    <div className="creat">
    <label>
        Username:
      </label>
        <input className='infoInput' type="text" name="username" value={formData.username} onChange={handleInputChange} required  />
    
    </div>
  
    <div className="creat">
    <label>
        Firstname:
      </label>
        <input className='infoInput' type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} required  />
    
    </div>
 
    <div className="creat">
    <label>
        Middlename:
      </label>
        <input className='infoInput' type="text" name="middlename" value={formData.middlename} onChange={handleInputChange} required  />
    
    </div>
   
    <div className="creat">
    <label>
        Lastname:
      </label>
        <input className='infoInput' type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} required  />
    
    </div>
    </div>
    <div className="sec">
    <div className="creat">
    <label>
        Date Of Birth:
      </label>
        <input className='infoInput' type="date" name="dob" value={formData.dob} onChange={handleInputChange} required  />
    
    </div>
 
    <div className="creat">
    <label>
       SSN:
      </label>
        <input className='infoInput' type="text" name="ssn" value={formData.ssn} onChange={handleInputChange} required  />
    
    </div>
   
    <div className="creat">
    <label>
       phonenumber:
      </label>
        <input className='infoInput' type="text" name="phonenumber" value={formData.phonenumber} onChange={handleInputChange} required  />
    
    </div>
    <div className="creat">
    <label>
       Email:
      </label>
        <input className='infoInput' type="text" name="email" value={formData.email} onChange={handleInputChange} required  />
    
    </div>
    </div>
    </div>

    <button type='submit'>submit</button>
  </form>
  </div>
  
    </div>
  )
}

export default Form