import  { useState } from 'react'
import {Link,useNavigate} from  "react-router-dom";
import OAuth from '../components/OAuth.jsx';


function SignUp() {

  const [formData,setFormData] = useState({})
  const[error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e){
   
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
   
   
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup",
      {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
          "Access-Control-Allow-Origin" : "*", 
         
        },
        body : JSON.stringify(formData),
      });
      
      const data = await res.json();
      if(data.success === false){
        setLoading(false);
        setError(data.message);
        
        return;
      }
      setLoading(false);
      setError(null)
      navigate("/signin")
      console.log(data)
    } catch (error) {
      setLoading(false)
      setError(error.message)
      
    }
  }
  
  return (
    <div className='mx-auto p-3 max-w-lg'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
     <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-7'>
     <input type='text' id='username' placeholder='Enter Username' className='border p-3 rounded-lg' onChange={handleChange} />
        <input type='text' id='email' placeholder='Enter Email' className='border p-3 rounded-lg' onChange={handleChange}  />
        <input type='text' id = 'password' placeholder='Enter Password' className='border p-3 rounded-lg'  onChange={handleChange} />
        <button disabled = {loading}
         className='bg-slate-700 text-white p-3 text-center  uppercase rounded-lg hover:opacity-95 disabled:opacity-8'
         >
      {loading ? 'Loading...' : 'Sign Up'}
     </button>
     <OAuth />
     </form>
     
     <div className='mt-5 gap-2 flex flex-row'>
      <p className=' text-black'>Have an account?</p>
      <Link to={"/signin"}>
      <span className='text-blue-700'>Sign In</span>

      </Link>
     
     </div>
     {error && <p className='text-red-500 mt-5'>{error}</p>}
        
      
    </div>
  )
}

export default SignUp