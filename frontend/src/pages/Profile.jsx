import React, { useState,useEffect } from 'react'
import {useSelector} from "react-redux"
import { useRef } from 'react';
import {getDownloadURL, getStorage,ref, uploadBytesResumable} from "firebase/storage";
import {app} from "../firebase";

function Profile() {
  const fileRef = useRef(null);
  const {currentUser} = useSelector((state)=>state.user);
  const [file,setFile] = useState(undefined);
  const[imagePerc,setImagePerc] = useState(0);
  const [imageUploadError,setImageUploadError] = useState(false);
  const [formData, setFormData]= useState({});


  
 //firebase storage
// allow read;
      //allow write : if 
    //   request.resource.size <2 *1024 * 1024 &&
    //   request.resource.contentType.matches('image/.*')

    // }
  useEffect(()=>{
    if(file){
      handleFileUpload(file);
    }
  },[file])

  const handleFileUpload = (file)=>{
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name
      const storageRef = ref(storage,fileName);
      const uploadTask = uploadBytesResumable(storageRef,file);// to see the percentage of uploading

      uploadTask.on('state_changed',
      (snapshot)=>{
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) *100
       setImagePerc(Math.round(progress));
      },
      (error)=>{
        setImageUploadError(true);
      },
      ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then
        ((downloadURL)=>{
          setFormData({...formData,avatar:downloadURL});
        })
      });
  }



  return (
    <div className='p-3 max-w-lg mx-auto'>
       <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
     <form className='gap-4 flex flex-col'>
     <input onChange={(e)=>setFile(e.target.files[0])} type='file' hidden ref={fileRef} accept='image/*' />
     <img onClick={()=>fileRef.current.click()} src = {formData.avatar|| currentUser.avatar} alt='profile' className='rounded-lg h-24
     w-24 object-cover cursor-pointer self-center mt-2'/>
     <p className='text-sm self-center'>
      {imageUploadError?
      (<span className='text-red-700'>Error in Image Upload(Image must be less than 2 mb)</span>)
      : imagePerc >0 && imagePerc <100 ? (
        <span className='text-slate-700'>
          {`Uploading ${(imagePerc)}%`}
        </span>)
        :
        imagePerc === 100 ?(
          <span className='text-green-700'>Image Uploaded Succesfully</span>)
          :(
          "")
        
      
      
      }
     </p>
     <input type='text' placeholder='username' className='border p-3 rounded-lg'id='username'/>
     <input type='text' placeholder='email' className='border p-3 rounded-lg' id='email'/>
     <input type='text' placeholder='password' className='border p-3 rounded-lg' id='password'/>
     <button className='bg-slate-700 text-white rounded-lg p-3 uppercase
     hover:opacity-95 disabled:opacity-80'>Update</button>


     </form>
     <div className='justify-between flex mt-5'>
      <span className='text-red-700 cursor-pointer'>Delete account</span>
      <span className='text-red-700 cursor-pointer'>Sign out</span>
     </div>
    </div>
   
  )
}

export default Profile