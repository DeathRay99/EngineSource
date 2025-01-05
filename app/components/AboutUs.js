const AboutUs = () => {
    return (
      <div className="w-full max-w-7xl mx-auto mt-1 flex items-center space-x-8 sm:mt-44">
        {/* Left side - Images */}
        <div className="w-1/2 space-y-4">
          <div className="w-full h-auto">
            <img
              src="/aboutus_2.jpg" // Replace with actual image path
              alt="Engine Image 2"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300 rounded-2xl shadow-2xl"
            />
          </div>
        </div>
  
        {/* Right side - Content */}
        <div className="w-1/2">
          <h3 id="about" className="text-xl font-bold text-blue-600 mb-1">About Us</h3>
          <h4 className="text-4xl text-gray-800 mb-4 font-bold ">
            Buy high-performance Used Engines online with confidence!
          </h4>
          <p className="text-base text-gray-700 mb-4">
            EngineSource is a trusted name in the industry, offering OEM quality used engines online. We work with trusted partners, ensuring high years of guaranteed usage so you never have to worry about any failure. At EngineSource, our primary goal is to use quality engines and automobile parts while placing orders for old and OEM vehicle parts. This gives plenty of scope for parts, new parts, and selling parts to improve the efficiency of your heavy-duty vehicles, like trucks and cars. Our clients enjoy unique advantages of assembling new and OEM vehicle parts with full support management.
          </p>
  
          <ul className="list-disc pl-6 text-base text-gray-700 mb-4">
            <li>Facilitating Advance-Quality Used Engines</li>
            <li>Extensively Tested Old Engine Parts</li>
            <li>Competitive Pricing</li>
            <li>Genuine Hardware Parts</li>
          </ul>
  
          <p className="text-base text-gray-700 mb-6">
            You can rely on us to provide high-quality, performance-driven solutions to keep your vehicles running smoothly.
          </p>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  