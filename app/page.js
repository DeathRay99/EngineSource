import Image from "next/image";
import QuoteSection from "./components/QuoteSection";
import FeatureCard from "./components/FeatureCard";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import EngineCards from "./components/EngineCards";
import OurProducts from "./components/OurProduct";
import { FaPhoneAlt, FaComments } from "react-icons/fa"; // Import phone and chatbot icons

export default function Home() {
  return (
    <div>
      <QuoteSection />
      <FeatureCard />
      <AboutUs />
      <OurProducts />
      <Footer />

      {/* Floating Phone Icon */}
      <div className="fixed bottom-5 left-5 bg-green-500 p-3 rounded-full text-white shadow-lg cursor-pointer transition-transform transform hover:scale-110 hover:shadow-xl">
       <a href="tel:+918448875715"><FaPhoneAlt size={40} /></a> 
      </div>

      {/* Floating Chatbot Icon */}
      <div className="fixed bottom-5 right-5 bg-blue-500 p-3 rounded-full text-white shadow-lg cursor-pointer transition-transform transform hover:scale-110 hover:shadow-xl">
        <FaComments size={40} />
      </div>
    </div>
  );
}
