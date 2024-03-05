import React from 'react'
import {Link} from  "react-router-dom";

function SignUp() {
  return (
    <div className='mx-auto p-3 max-w-lg'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
     <form className='flex flex-col gap-4 mt-7'>
     <input type='text' placeholder='Enter Username' className='border p-3 rounded-lg' />
        <input type='text' placeholder='Enter Email' className='border p-3 rounded-lg'  />
        <input type='text' placeholder='Enter Password' className='border p-3 rounded-lg'  />
        <button className='bg-slate-700 text-white p-3 text-center  uppercase rounded-lg hover:opacity-95 disabled:opacity-8'>
      Sign Up
     </button>
     </form>
     
     <div className='mt-5 gap-2 flex flex-row'>
      <p className=' text-black'>Have an account?</p>
      <Link to={"/signin"}>
      <span className='text-blue-700'>Sign In</span>

      </Link>
     
     </div>
        
      
    </div>
  )
}

export default SignUp