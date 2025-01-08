'use client'
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa"; // Import phone icon

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility

  // Function to handle opening and closing of the modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-40 sm:w-56"
            />
          </div>

          {/* Navigation Links */}
          <ul className="hidden sm:flex space-x-6">
            <li>
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-500 transition-colors font-bold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-500 transition-colors font-bold"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#order"
                className="text-gray-700 hover:text-blue-500 transition-colors font-bold"
              >
                Order Online
              </a>
            </li>
            <li>
              <button
                onClick={toggleModal}
                className="text-gray-700 hover:text-blue-500 transition-colors font-bold"
              >
                Contact Us
              </button>
            </li>
          </ul>

          {/* Need Help Section */}
          <div className="flex items-center space-x-2">
            <a href="tel:+918448875715">
            <FaPhoneAlt
              className="sm:h-6 sm:w-6 text-gray-700 transition-transform transform hover:scale-110 hover:text-blue-500"
            />
            </a>
            <span className="text-gray-700 text-xs font-bold ">
              Need Help?{" "}
              <a href="tel:+918448875715" className="text-blue-500 font-bold">
              +91 8448875715
              </a>
            </span>
          </div>
        </div>
      </nav>

      {/* Modal Popup for Contact Us */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-gray-800">Contact Us</h2>
            <p className="text-gray-600 mt-2">You can reach us at:</p>
            <p className="text-blue-500">+91 8448875715</p>
            <p className="mt-4 text-gray-600">Email: partsstoreus@gmail.com</p>
            <button
              onClick={toggleModal}
              className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
