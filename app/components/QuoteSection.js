"use client";
import React, { useState, useEffect } from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const words = [
  {
    text: `Welcome\u00A0`,
    className: "text-white",
  },
  {
    text: "to\u00A0",
    className: "text-white",
  },
  {
    text: "PartsStoreUS.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

// List of car brands and their corresponding models
const carBrands = {
  BMW: ["3 Series", "5 Series", "7 Series", "X5", "X6", "M3", "M4"],
  Audi: ["A3", "A4", "A6", "Q5", "Q7", "Q8", "RS7"],
  Toyota: ["Corolla", "Camry", "RAV4", "Highlander", "Land Cruiser"],
  Honda: ["Civic", "Accord", "CR-V", "Pilot", "Fit", "Odyssey"],
  Ford: ["F-150", "Mustang", "Escape", "Explorer", "Fusion"],
  Chevrolet: ["Cruze", "Malibu", "Equinox", "Tahoe", "Silverado"],
  Mercedes: ["C-Class", "E-Class", "S-Class", "GLC", "GLS", "A-Class"],
  Nissan: ["Altima", "Maxima", "Pathfinder", "Sentra", "Titan"],
  Volkswagen: ["Golf", "Passat", "Jetta", "Tiguan", "Atlas"],
  Subaru: ["Impreza", "Outback", "Forester", "Crosstrek", "Legacy"],
  Tesla: ["Model S", "Model 3", "Model X", "Model Y"],
  Hyundai: ["Elantra", "Sonata", "Tucson", "Palisade", "Santa Fe"],
  Kia: ["Optima", "Soul", "Sportage", "Sorento", "Stinger"],
  Lexus: ["RX", "NX", "ES", "IS", "GX", "LX"],
  Jaguar: ["F-Type", "XE", "XF", "XJ", "F-PACE", "E-PACE"],
  LandRover: ["Range Rover", "Discovery", "Defender", "Evoque", "Sport"],
  Porsche: ["911", "Cayenne", "Macan", "Panamera", "Taycan"],
  Ferrari: ["488 GTB", "F8 Tributo", "Portofino", "Roma", "LaFerrari"],
  Lamborghini: ["Aventador", "Huracán", "Urus", "Sián"],
  Maserati: ["Ghibli", "Levante", "Quattroporte", "GranTurismo"],
  Buick: ["Encore", "Envision", "LaCrosse", "Regal", "Enclave"],
  Volvo: ["XC40", "XC60", "XC90", "S60", "S90"],
};

const QuoteSection = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(""); // Brand state
  const [selectedModel, setSelectedModel] = useState(""); // Model state
  const [showModal, setShowModal] = useState(false); // Modal state
  const [message, setMessage] = useState(""); // Message state
  const [year, setYear] = useState(""); // Year state
  const [description, setDescription] = useState(""); // Description input
  const [part, setPart] = useState(""); // Part selection state
  const [name, setName] = useState(""); // Name state
  const [phone, setPhone] = useState(""); // Phone state
  const [email, setEmail] = useState(""); // Email state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Initialize formData object with default empty values
    const formData = {
      name,
      phone,
      email,
      year,
      brand: selectedBrand,
      model: selectedModel,
      part,
      description,
    };

    // Validation logic
    const errors = {};

    if (!formData.name) errors.name = "Name is required.";
    if (!formData.phone) errors.phone = "Phone number is required.";
    if (formData.phone && !/^\d{10}$/.test(formData.phone))
      errors.phone = "Phone number must be a valid 10-digit number.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.year) errors.year = "Year is required.";
    if (!formData.brand) errors.brand = "Brand is required.";
    if (!formData.model && formData.brand !== "Other")
      errors.model = "Model is required.";
    if (!formData.part && formData.brand !== "Other")
      errors.part = "Part is required.";
    if (!isChecked) errors.checkbox = "You must agree to the terms.";

    setFormErrors(errors);

    // If there are errors, don't submit the form
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Proceed with form submission
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage(
          "Your details have been successfully saved. Our team will get back to you shortly."
        );
        try {
          if (window.gtag) {
            window.gtag('event', 'conversion', {
              send_to: 'AW-11548761729/Lcd8CKXxlIIaEIG98IIr', // Replace with your send_to ID
              value: 1.0,
              currency: 'INR',
            });
          } else {
            console.warn("Google Analytics not loaded.");
          }
        } catch (e) {
          console.error("Error sending conversion event:", e);
        }
        setShowModal(true); // Show the modal
        setFormErrors({});
        setSelectedBrand("");
        setSelectedModel("");
        setPart("");
        setDescription("");
        setYear("");
        setEmail("");
        setName("");
        setPhone("");
        setIsChecked(false);
      } else {
        setMessage("Failed to submit the form. Please try again.");
        setShowModal(true); // Show the modal
      }
    } catch (error) {
      setMessage("An error occurred: " + error.message);
      setShowModal(true); // Show the modal
    }
  };

  const handlePhoneChange = (e) => {
    let phoneValue = e.target.value.replace(/[^0-9]/g, ""); // Remove non-digit characters
    if (phoneValue.length > 10) {
      phoneValue = phoneValue.slice(0, 10); // Limit to 10 digits
    }
    setPhone(phoneValue);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
    // Reset brand and model when year changes
    setSelectedBrand("");
    setSelectedModel("");
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    // Reset model and part when brand changes
    setSelectedModel("");
    setPart("");
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{
        backgroundImage: `url('/1.jpg')`,
        height: "80vh",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
<div className="flex w-[100%]  h-[80vh] ">
      <div className="container px-2.5 sm:px-10 flex flex-wrap lg:flex-nowrap items-center justify-between relative">
        {/* Left Content */}
        <div className="text-white w-[90%] space-y-6 ">
          <TypewriterEffectSmooth words={words} />
          <p className="text-xs hidden sm:block md:text-lg w-[60%]">
            Enhance the performance of your vehicle with trusted used engines.
            Operated locally with full-fledged support from leading auto giants,
            we deliver exceptional quality to meet your automotive needs.
          </p>
          <button
            className="bg-blue-600 m-0 text-white py-1 px-1 sm:py-3 sm:px-6 rounded-md text-sm sm:text-lg shadow-md flex items-center justify-center space-x-2 font-bold transform transition duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => (window.location.href = "tel:+14023964181")}
          >
            <span className="font-bold">Call with Expert</span>
            <span className="text-xl font-bold">→</span>
          </button>
        </div>
        {/* Form */}
        <div className="bg-blue-600 shadow-md rounded-lg  p-1 sm:p-3 max-w-xl w-full lg:ml-10  sm:mt-5">
          <h2 className="text-2xl font-bold text-white text-center mb-2">
            Get Your Free Quote
          </h2>
          <form className="mt-0 sm:mt-3 " onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              {/* Year Dropdown */}
              <div>
                <select
                  name="year"
                  className={`w-full border rounded-md px-3 py-1.5 text-gray-700 focus:ring-blue-500 focus:border-blue-500 text-sm ${
                    formErrors.year ? "border-red-500" : "border-gray-300"
                  }`}
                  onChange={handleYearChange}
                  value={year}
                >
                  <option value="" disabled>
                    - Select Year -
                  </option>
                  {[...Array(2025 - 1990)].map((_, index) => {
                    const year = 1990 + index;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
                {formErrors.year && (
                  <p className="text-red-500 text-xs">{formErrors.year}</p>
                )}
              </div>
              {/* Brand Dropdown */}
              <div>
                <select
                  name="brand"
                  className={`w-full border rounded-md px-3 py-1.5 text-gray-700 focus:ring-blue-500 focus:border-blue-500 text-sm ${
                    formErrors.brand ? "border-red-500" : "border-gray-300"
                  }`}
                  value={selectedBrand}
                  onChange={handleBrandChange}
                >
                  <option value="" disabled>
                    - Select Brand -
                  </option>
                  {Object.keys(carBrands).map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
                {formErrors.brand && (
                  <p className="text-red-500 text-xs">{formErrors.brand}</p>
                )}
              </div>
            </div>

            {/* Model and Part Fields (only shown if brand is not "Other") */}
            {selectedBrand !== "Other" && (
              <div className="grid grid-cols-2 gap-4 mt-2">
                {/* Model Dropdown */}
                <div>
                  <select
                    name="model"
                    className={`w-full border rounded-md px-3 py-1.5 text-gray-700 focus:ring-blue-500 focus:border-blue-500 text-sm ${
                      formErrors.model ? "border-red-500" : "border-gray-300"
                    }`}
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                  >
                    <option value="" disabled>
                      - Select Model -
                    </option>
                    {selectedBrand &&
                      carBrands[selectedBrand]?.map((model) => (
                        <option key={model} value={model}>
                          {model}
                        </option>
                      ))}
                  </select>
                  {formErrors.model && (
                    <p className="text-red-500 text-xs">{formErrors.model}</p>
                  )}
                </div>

                {/* Part Dropdown */}
                <div>
                  <select
                    name="part"
                    className="w-full border rounded-md px-3 py-1.5 text-gray-700 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    value={part}
                    onChange={(e) => setPart(e.target.value)}
                  >
                    <option value="" disabled>
                      - Select Part -
                    </option>
                    <option value="Engine">Engine</option>
                    <option value="Transmission">Transmission</option>
                    <option value="Turbo">Turbo</option>
                    <option value="Suspension">Suspension</option>
                    <option value="Brakes">Brakes</option>
                  </select>
                </div>
              </div>
            )}

            {/* Description Field (only shown if "Other" brand is selected) */}
            {selectedBrand === "Other" && (
              <div className="mt-2">
                <input
                  type="text"
                  name="description"
                  placeholder="Write Your Requirement"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border rounded-md px-3 py-1.5 text-gray-700 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            )}

            {/* Other Fields */}
            <div className="grid grid-cols-1 gap-2 sm:gap-4 mt-2">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border rounded-md px-3 py-1.5 text-gray-700 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-xs">{formErrors.name}</p>
                )}
              </div>
              <div className="flex">
                <span className="w-10 border rounded-md px-3 py-1.5 text-gray-700 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white">
                  +1
                </span>
                <input
                  type="text"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="Enter Phone (10 digits)"
                  className={`w-full border rounded-md px-3 py-1.5 text-gray-700 focus:ring-blue-500 focus:border-blue-500 text-sm ${
                    formErrors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-xs">{formErrors.phone}</p>
                )}
              </div>

              <div className="mt-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full border rounded-md px-3 py-1.5 text-gray-700 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-xs">{formErrors.email}</p>
                )}
              </div>

              {/* Checkbox */}
              <div className="">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={isChecked}
                    onChange={() => setIsChecked((pre)=>!pre)}
                  />
                  <span className="ml-2 text-xs font-bold">
                    By checking this box, you agree to receive recurring
                    messages from PartsStoreUS. Reply STOP to opt out. Reply
                    HELP for help. Message frequency varies. Message and data
                    rates may apply. Carriers are not liable for delayed or
                    undelivered messages.
                  </span>
                </label>
                {formErrors.checkbox && (
                  <p className="text-red-500 text-xs">{formErrors.checkbox}</p>
                )}
              </div>
            </div>

            <div className="mt-1 text-center">
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-3 rounded-md text-lg shadow-md transform transition duration-300 ease-in-out hover:bg-black-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Get Quote
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-80">
            <p className="text-center">{message}</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md transform transition duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuoteSection;
