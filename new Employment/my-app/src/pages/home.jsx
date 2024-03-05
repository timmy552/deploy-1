import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import "./home.css"

const Home = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    // Your form fields here
    username: '',
    password: '',
    confirmpassword: '',

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
        const response = await fetch('http://localhost:2000/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
          },
          body: JSON.stringify(formData),
        });
  
       
        if (response.ok || response.status === 200) {
          setError('Success')
          navigate('/form')
        }
        else{
          setError('username or phonenumber already exists')
          console.log("Details already exist")
        }
  
  
        // Handle the successful response, if needed
        const data = await response.json();
        console.log('Success:', data);
      } catch (error) {
        // Handle errors here
        console.error('Error:', error.message);
      }
      
    };
   
   

  return (
    <div className='parent'>
      <div className="formholder">
     <form action="" className='createAccount' onSubmit={handleSubmitFunction}>
      <h1>Create your account</h1>
     {error}
     <div className='create'>
      <label>
        Username:
      </label>
        <input type="text" name="username" value={formData.username} onChange={handleInputChange} required  />
        </div>
     <div className='create'>
      <label>
        Password:
      </label>
        <input type="text" name="password" value={formData.password} onChange={handleInputChange} required  />
        </div>
     <div className='create'>
      <label>
        Confirm Password:
      </label>
        <input type="text" name="confirmpassword" value={formData.confirmpassword} onChange={handleInputChange} required  />
        </div>
        <button type='submit'>submit</button>
     </form>
     </div>
    </div>
  )
}

export default Home