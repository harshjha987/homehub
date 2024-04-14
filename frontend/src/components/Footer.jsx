import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className=" left-0 w-full bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-center">
          <Link to="/" className="text-gray-300 hover:text-white px-4">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white px-4">About Us</Link>
          <a href="/search" className="text-gray-300 hover:text-white px-4">Listings</a>
          <a href="/contact" className="text-gray-300 hover:text-white px-4">Contact</a>
        </div>
        <div className="text-center text-gray-400 mt-2">
          © 2024 HomeHub. All rights reserved.
        </div>
      </footer>
  )
}

export default Footer