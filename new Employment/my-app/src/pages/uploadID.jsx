import React from 'react'
import { useState, useEffect } from 'react'
import {Image} from "cloudinary-react"
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./upload.css"
import { BiLogoGmail } from "react-icons/bi";






const UploadID = () => {

 const navigate = useNavigate()
 const [error1, setError1] = useState("")
    const [imageSelected, setImageSelected] = useState()
    const handleImageSelected =(e)=>{
     setImageSelected(e.target.files[0])
    }
    
    const [imageSelected1, setImageSelected1] = useState()
    const handleImageSelected1 =(e)=>{
     setImageSelected1(e.target.files[0])
    }
    
    console.log(imageSelected)
   const uploadImage = ()=>{
     const formData = new FormData()
     formData.append("file", imageSelected)
     formData.append("upload_preset", "bb3iplfd")
   
  Axios.post("https://api.cloudinary.com/v1_1/henrywalker/image/upload", formData).then((response) =>{if (response.status === 200){alert("successfull"); console.log(response) }else {setError1("something went wrong")}})
     
     navigate("")
   }
   const uploadImage1 = ()=>{
     const formData = new FormData()
     formData.append("file", imageSelected1)
     formData.append("upload_preset", "upf2xtjf")
  
  Axios.post("https://api.cloudinary.com/v1_1/henrywalker/image/upload", formData).then((response) =>{if (response.status === 200){alert("successfull"); console.log(response) }else {setError1("something went wrong")}})
     
     navigate("")
   }

   const [data, setData] = useState([])
   const AxiosData = async()=>{
     const res = await Axios.get('http://localhost:2000/dashboard')
     setData(res.data)
   }

   console.log(data)
   useEffect(()=>{
     AxiosData()
    // setLoading(true)
    //  setTimeout(() =>{
    // setLoading(false)
    //  }, 3000)
   }, [])
   const [show, hide] = useState("")
   const see = ()=>{
    hide(!show)
 }
 const gmail = () => {
  navigate("")
 }
 
   {/* <Image cloudName= "henrywalker" publicId="https://res.cloudinary.com/henrywalker/image/upload/v1708007170/e5yq5p7jql3v63d6zh17.jpg"/> */}
  return (
    <div className='grandparent'>
    <div className='parent4'>
      <div className="profilePic">
        <div className="avatar">
          <img src="https://i.pinimg.com/736x/f4/ed/1e/f4ed1ece60a8798c2233c508712d9e65.jpg" alt="" />
        </div>
          <div  className="gmail">
          <BiLogoGmail  id='gmailicon' /><p>connect to Gmail</p>
          </div>
      </div>
      <div className="profileDetails">
        <h1>My profile</h1>
        <div className="profiledetailholder">
          <div className="flex">
            <div className="firstname">
              <h4>USERNAME:</h4>
              <div>{data.username}</div>
            </div>
            <div className="firstname">
              <h4>FIRST NAME:</h4>
              <div>{data.firstname}</div>
            </div>
            <div className="firstname">
              <h4>MIDDLE NAME:</h4>
              <div>{data.middlename}</div>
            </div>
            <div className="firstname">
              <h4>LAST NAME:</h4>
              <div>{data.lastname}</div>
            </div>
            </div>
            <div className="flex">
            <div className="firstname">
              <h4>Date of Birth:</h4>
              <div>{data.dob}</div>
            </div>
            <div className="firstname">
              <h4>SSN:</h4>
              <div>
            {show? "xxxxxxxxx" : `${data.ssn}`}</div>
      <button id='ssnbutton' onClick={see}>{show? "show" : "hide"}</button>
            </div>
            <div className="firstname">
              <h4>PHONE NUMBER:</h4>
              <div>{data.phonenumber}</div>
            </div>
            <div className="firstname">
              <h4>EMAIL:</h4>
              <div>{data.email}</div>
            </div>
            </div>
          </div>
          </div>
    </div>
    <div className="imageHolder">
<div className="image1">
  <p>{error1}</p>
  <h4>upload front ID </h4>
<input id='imageinput' type="file" onChange={handleImageSelected} />
<button id='uploadbutton'  onClick={uploadImage}>upload</button>
</div>
<div className="image1">
  <p>{error1}</p>
  <h4>upload back ID </h4>
<input id='imageinput' type="file" onChange={handleImageSelected1} />
<button id='uploadbutton'  onClick={uploadImage1}>upload</button>
</div>
    </div>
    </div>
  )
}

export default UploadID