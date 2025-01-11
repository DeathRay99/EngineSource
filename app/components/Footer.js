'use client'
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col space-y-6">
        {/* Contact details in a single row */}
        <div className="flex flex-row justify-between items-center ">
          {/* Call us */}
          <div className="flex flex-col items-start space-y-2 p-2 sm:p-4 border-2 border-blue-500 rounded-lg">
            <h4 className="text-2xl font-bold">Call us</h4>
            <a
              href="tel:+14023964181"
              className="flex items-center space-x-2 text-base hover:text-blue-500 transition-colors duration-300 hover:scale-105"
            >
              <FaPhoneAlt className="text-xl" />
              <span>+1 4023964181</span>
            </a>
          </div>

          {/* Write to Us */}
          <div className="flex flex-col items-start space-y-2 p-2 sm:p-4 border-2 border-blue-500 rounded-lg">
            <h4 className="text-2xl font-bold">Write to us</h4>
            <a
              href="mailto:partsstoreus@gmail.com"
              className="flex items-center space-x-2 text-base hover:text-blue-500 transition-colors duration-300 hover:scale-105"
            >
              <FaEnvelope className="text-xl" />
              <span>partsstoreus@gmail.com</span>
            </a>
          </div>

          {/* Address */}
          
        </div>

        {/* Spacer between content */}
        {/* <div className="h-8"></div> */}

        {/* Social Media Icons and Quick Links/Subscribe in a single row */}
        <div className="flex justify-between items-center space-x-6 md:space-x-12">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/BBB_US_Torch_sm.svg" alt="BBB" className="w-32 h-24" />
          </div>

          {/* Social Media Icons jjj*/}
          <div className="flex space-x-6">
            {/* <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-300">
              <FaWhatsapp className="text-xl hover:scale-110 transition-transform duration-300" />
            </a> */}
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-300">
              <FaFacebookF className="text-xl hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-300">
              <FaInstagram className="text-xl hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-300">
              <FaLinkedinIn className="text-xl hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          {/* Quick Links and Subscribe */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 w-1/3">
            {/* Subscribe */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-semibold">Subscribe</h3>
              <p>Want to be notified about our services? Just sign up and we'll send you a notification by email.</p>
              <form onSubmit={handleSubmit} className="space-y-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-2 rounded-md w-[50%] bg-white text-black mr-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="bg-blue-600 text-white p-2 rounded-md mt-2 hover:bg-blue-700 transition-colors duration-300">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Blue Line Separator */}
        <hr className="my-6 border-t-2 border-blue-500" />

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-sm">&copy; 2024 PartsStoreUS. All rights reserved.</p>
        </div>
      </div>

      {/* Popup after submission */}
      {isSubmitted && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold text-black	">Thank you for subscribing!</h2>
            <p className='text-black font-semibold'>You will receive notifications about our services soon.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
