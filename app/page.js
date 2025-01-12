import Image from "next/image";
import QuoteSection from "./components/QuoteSection";
import FeatureCard from "./components/FeatureCard";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import EngineCards from "./components/EngineCards";
import OurProducts from "./components/OurProduct";
import Head from "next/head";
import AnimatedAboutUs from "./components/AnimatedAboutUs";
import { FaPhoneAlt, FaComments } from "react-icons/fa"; // Import phone and chatbot icons

export default function Home() {
  return (
    <div>
      <QuoteSection />
      <FeatureCard />
      <AnimatedAboutUs />
      <OurProducts />
      <Footer />

      {/* Floating Phone Icon */}
      <div className="fixed bottom-5 right-5  bg-green-500 p-3 rounded-full text-white shadow-lg cursor-pointer transition-transform transform hover:scale-110 hover:shadow-xl">
       <a href="tel:+14023964181"><FaPhoneAlt size={40} /></a> 
      </div>

      {/* Floating Chatbot Icon */}
      <div className="fixed bottom-5 left-5 bg-blue-500 p-2 rounded-md text-white shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl">
      <img src="/BBB_US_Torch_sm.svg" alt="BBB" className="h-16 sm:h-24" />
      </div>
    </div>
  );
}
