import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className=" left-0 w-full bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-center">
          <Link to="/" className="text-gray-300 hover:text-white px-4">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white px-4">About Us</Link>
          <Link to ="/search" className="text-gray-300 hover:text-white px-4">Listings</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white px-4">Contact</Link>
        </div>
        <div className="text-center text-gray-400 mt-2">
          © 2025 HomeHub. All rights reserved.
        </div>
      </footer>
  )
}

export default Footer