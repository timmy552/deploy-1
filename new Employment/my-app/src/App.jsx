import React from 'react';
import Axios from "axios"
import { useState } from 'react';
import {Image} from "cloudinary-react"
import Home from './pages/home';
import UploadID from './pages/uploadID';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './pages/form';

function App() {
   const [imageSelected, setImageSelected] = useState()
   const handleImageSelected =(e)=>{
    setImageSelected(e.target.files[0])
   }
   console.log(imageSelected)
  const uploadImage = ()=>{
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "bb3iplfd")

    Axios.post("https://api.cloudinary.com/v1_1/henrywalker/image/upload", formData).then((response) =>{console.log(response)})
  }
  return (
    <div className="App">
  <BrowserRouter>
   <Routes>
    <Route path='/' element= {< Home/>}/>
   <Route path='/login' element= {  <Login />}/>
   <Route path='/upload' element= {<UploadID />}/>
   <Route path='/form' element= {<Form />}/>
  </Routes>
      </BrowserRouter>
  
     {/* <Image cloudName= "henrywalker" publicId="https://res.cloudinary.com/henrywalker/image/upload/v1708007170/e5yq5p7jql3v63d6zh17.jpg"/>

     <input type="file" onChange={handleImageSelected} />
     <button onClick={uploadImage}>upload</button> */}
    </div>

   
  );
}

export default App;
