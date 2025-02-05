import React from 'react';
import Footer from '../components/Footer';

function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 flex flex-col lg:flex-row items-center gap-8 ">
      <div className="w-full lg:w-1/3 flex justify-center">
        <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center shadow-lg">
          <img src="./h.jpg" alt="Harsh Ranjan Jha" className="object-cover w-full h-full" />
        </div>
      </div>
      <div className="w-full lg:w-2/3">
        <h1 className="text-4xl font-bold text-slate-800 mb-6 font-sans">Contact Us</h1>
        <div className="space-y-4">
          <p className="text-xl text-gray-700 mb-2"><strong>Name:</strong> Harsh Ranjan Jha</p>
          <p className="text-xl text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:jha.harsh837@gmail.com" className="text-blue-600 hover:underline">jha.harsh837@gmail.com</a></p>
          <p className="text-xl text-gray-700 mb-2"><strong>Twitter:</strong> <a href="https://x.com/thattallboy987" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://x.com/thattallboy987</a></p>
          <p className="text-xl text-gray-700 mb-2"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/harsh-ranjan-jha-b16698238/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/harsh-ranjan-jha-b16698238/</a></p>
          <p className="text-xl text-gray-700 mb-2"><strong>Github:</strong> <a href="https://www.github.com/harshjha987/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.github.com/harshjha987/</a></p>
        </div>
      </div>
      <div className=' fixed bottom-0 left-0 w-full'>
      <Footer />

      </div>
     
    </div>
    
  );
}

export default ContactUs;
