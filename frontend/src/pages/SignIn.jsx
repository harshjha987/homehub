import React, { useState } from 'react'
import {Link,useNavigate} from  "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth.jsx';
function SignIn() {

  const [formData,setFormData] = useState({})
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleChange(e){
   
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
   
   
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      dispatch(signInStart())
      const res = await fetch("/api/auth/signin",
      {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
         
         
        },
        body : JSON.stringify(formData),
      });
      
      const data = await res.json();
      if(data.success === false){
        dispatch(signInFailure(data.message))
        
        return;
      }
      dispatch(signInSuccess(data))
      navigate("/")
      console.log(data)
    } catch (error) {
     dispatch(signInFailure(error.message))
      
    }
  }
  
  return (
    <div className='mx-auto p-3 max-w-lg'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
     <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-7'>
     
        <input type='text' id='email' placeholder='Enter Email' className='border p-3 rounded-lg' onChange={handleChange}  />
        <input type='text' id = 'password' placeholder='Enter Password' className='border p-3 rounded-lg'  onChange={handleChange} />
        <button
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
     <OAuth />
     </form>
     
     <div className='mt-5 gap-2 flex flex-row'>
      <p className=' text-black'> Don't have an account?</p>
      <Link to={"/signup"}>
      <span className='text-blue-700'>Sign Up</span>

      </Link>
     
     </div>
     {error && <p className='text-red-500 mt-5'>{error}</p>}
        
      
    </div>
  )
}

export default SignIn