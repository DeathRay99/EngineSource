const FeatureCard = () => {
    return (
      <div className="relative w-[96%] sm:w-[90%] mx-auto">
        <div className=" static sm:absolute  bg-white shadow-lg rounded-lg  p-2 sm:p-5 m-1 top-[-60px]">
          <h3 className=" text-lg sm:text-xl font-bold text-blue-600 mb-1">Discover Our Features</h3>
          <h4 className=" text-2xl sm:text-4xl text-gray-800 mb-2 font-bold ">High-Quality Used Engine Parts</h4>
          <p className="text-base text-gray-700 mb-1 text-justify">
            Facing engine troubles? Fixing them sounds fascinating and offers a rewarding satisfaction of saving your hard-earned investment. At PartsStoreUS, your decision brings new advantages. No longer can you say it is just a scrap business. Instead, we offer cutting-edge hardware that facilitates recovering, clearing, and reconditioning auto rescue across the country.
          </p>
        </div>
      </div>
    );
  };
  
  export default FeatureCard;
  