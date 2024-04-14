import React from 'react';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className='flex flex-col min-h-screen mx-auto'>
      <div className='py-20 px-4 max-w-6xl mx-auto overflow-y-auto'>
        <h1 className='text-3xl font-bold mb-4 text-slate-800'>Welcome to HouseHub.com</h1>
        <p className='mb-4 text-slate-700'>At HouseHub.com, we're passionate about simplifying the process of buying, renting, and selling homes. Whether you're looking for your dream house, searching for the perfect rental property, or considering listing your home, we're here to make it effortless and enjoyable.</p>
        <p className='mb-4 text-slate-700'>Our mission is to connect buyers, sellers, renters, and landlords in a seamless online marketplace. We strive to empower individuals and families by providing them with the tools and resources they need to make informed real estate decisions.</p>
        <p className='mb-4 text-slate-700'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
      </div>

      {/* Footer */}
      <div className=' fixed bottom-0 left-0 w-full'>
      <Footer />

      </div>
     
    </div>
  );
}
