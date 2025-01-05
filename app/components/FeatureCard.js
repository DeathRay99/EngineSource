const FeatureCard = () => {
    return (
      <div className="relative ">
        <div className="static sm:absolute sm:top-[-60px] sm:left-1/2  sm:-translate-x-1/2 bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl">
          <h3 className="text-xl font-bold text-blue-600 mb-1">Discover Our Features</h3>
          <h4 className="text-4xl text-gray-800 mb-3 font-bold ">High-Quality Used Engine Parts Near Me</h4>
          <p className="text-base text-gray-700 mb-1">
            Facing engine troubles? Fixing them sounds fascinating and offers a rewarding satisfaction of saving your hard-earned investment. At EngineSource, your decision brings new advantages. No longer can you say it is just a scrap business. Instead, we offer cutting-edge hardware that facilitates recovering, clearing, and reconditioning auto rescue across the country.
          </p>
        </div>
      </div>
    );
  };
  
  export default FeatureCard;
  