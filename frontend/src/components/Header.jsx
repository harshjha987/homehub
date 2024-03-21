import { FaSearch } from "react-icons/fa";
import { Link,NavLink } from "react-router-dom";
import {useSelector} from "react-redux" 

function Header() {
  const {currentUser} = useSelector((state) => state.user)
  return (
   <header className='h-16 w-full bg-slate-300 flex items-center shadow-md justify-between  p-3'>
   <Link to="/">
   <h1 className='font-bold text-xl md:text-2xl flex felx-wrap md:px-20'>
        <span className='text-gray-900'>Dream</span>
        <span className='text-red-800'>Home</span>
    </h1>

   </Link>
    
    <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
        <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 md:w-56'/>
        <FaSearch className = "text-slate-900" />
    </form>
    <ul className="flex flex-wrap md:px-20">
    
    <Link to= "/">
    <li className="text-slate-900 mx-3 hidden sm:inline hover:underline cursor-pointer">Home</li>
    </Link>
    

    <Link to= "/about">
    <li className="text-slate-900 mx-3  hidden sm:inline  hover:underline cursor-pointer">About</li>
    </Link>
      
    <Link to = "/profile">
    {currentUser?(<img className="rounded-lg w-7 h-7 object-cover" src = {currentUser.avatar} alt = "profile"/>
    ):(
   
      <li className="text-slate-900 md:mx-3 hover:underline cursor-pointer ">Sign In</li>)}
    </Link>
        
    
      
    </ul>
   </header>
  )
}

export default Header