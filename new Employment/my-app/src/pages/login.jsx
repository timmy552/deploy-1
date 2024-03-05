import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import "./login.css"

const Login = () => {
    const [error, setError] = useState('')
  
    const navigate = useNavigate()
    
    const [formData, setFormData] = useState({
        // Your form fields here
       username: '',
       password: ""
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
          const response = await fetch('http://localhost:2000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // Add any additional headers if needed
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok || response.status === 200) {
              
           
              navigate('/upload')
                setError('Success')
                console.log('success!!!!!!')
            }
            if(response.status === 401) {
                setError('Details does not exist')
                console.log("Details does not exist")
          }
        
    
          // Handle the successful response, if needed
          const data = await response.json();
          console.log('Error mssg:', data);
        } catch (error) {
          // Handle errors here
          console.error('Error:', error.message);
        }
    }
   const signUp= () =>{
    navigate("/")
   }
  return (
    <div className='parent3'>
    <form className='formlogin' onSubmit={handleSubmitFunction}>
      <h1>login</h1>
      <div className='login'>
      <label>
        Username:
      </label>
        <input className='loginInput' type="text" name="username" value={formData.username} onChange={handleInputChange}  />
        </div>
        <div  className='login'>
      <label>
        Password:
      </label>
        <input className='loginInput' type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </div>
        <p>{error}</p>
      <button type="submit">Submit</button>
      <p>not yet registered? <a style={{color:"blue", cursor: "pointer"}} onClick={signUp}>sign Up</a></p>
    </form>
    </div>
  )
}

export default Login