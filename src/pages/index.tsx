"use client";
import React, { useState, useRef } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  Layers, 
  Award
} from "lucide-react";
import { InfiniteMovingLensCards } from "@/components/ui/infinite-moving-cards";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";


const LandingPage = () => {
  const [activeSection, setActiveSection] = useState(0);
  
  const homeRef = useRef<HTMLElement | null>(null);
  const featuresRef = useRef<HTMLElement | null>(null);
  const benefitsRef = useRef<HTMLElement | null>(null);
  
  const sections = [
    {
      title: "Register Ideas on Blockchain",
      description: "Securely record your intellectual property on an immutable blockchain ledger, providing timestamped proof of your innovation.",
      imageSrc: "/q.jpg",
      imageAlt: "Blockchain ledger recording ideas",
      color: "bg-blue-600"
    },
    {
      title: "Timestamp Ownership",
      description: "Establish clear ownership with cryptographically secure timestamps that serve as indisputable proof of your creation's origin.",
      imageSrc: "/own.jpg",
      imageAlt: "Digital timestamp certificate",
      color: "bg-purple-600"
    },
    {
      title: "Transparent Collaboration",
      description: "Collaborate with peers through smart contracts that automatically enforce agreements and distribute rewards fairly.",
      imageSrc: "/we.jpg",
      imageAlt: "Smart contract collaboration",
      color: "bg-green-600"
    }
  ];

  const testimonials = [
    {
      title: "Register Ideas on Blockchain",
      quote: "Securely record your intellectual property on an immutable blockchain ledger, providing timestamped proof of your innovation.",
      name: "Blockchain Security",
      imageSrc: "/q.jpg",
      imageAlt: "Blockchain ledger recording ideas",
      color: "bg-blue-600"
    },
    {
      title: "Timestamp Ownership",
      quote: "Establish clear ownership with cryptographically secure timestamps that serve as indisputable proof of your creation's origin.",
      name: "Digital Ownership",
      imageSrc: "/own.jpg",
      imageAlt: "Digital timestamp certificate",
      color: "bg-purple-600"
    },
    {
      title: "Transparent Collaboration",
      quote: "Collaborate with peers through smart contracts that automatically enforce agreements and distribute rewards fairly.",
      name: "Smart Contracts",
      imageSrc: "/we.jpg",
      imageAlt: "Smart contract collaboration",
      color: "bg-green-600"
    }
  ];

  const nextSection = () => {
    setActiveSection((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
  };

  const prevSection = () => {
    setActiveSection((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
  };

  const handleConnect = () => {
    alert("Connect your wallet");
  };
  
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    // Scroll to section with offset to account for the fixed header
    const navHeight = 64; // Height of the navigation bar (h-16 = 64px)
    if (!ref.current) return;
    const topPosition = ref.current.getBoundingClientRect().top + window.pageYOffset - navHeight;
    
    window.scrollTo({
      top: topPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans dark:bg-neutral-950">
      {/* Navigation Bar */}
      <nav className="flex w-full items-center justify-between px-4 py-4 bg-black text-white sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <h1 className="font-bold md:text-2xl text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 drop-shadow-sm">Re-Sync</h1>
        </div>
        <div className="flex space-x-4">
          <button onClick={() => scrollToSection(homeRef)} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition">
            <span className="flex items-center gap-2">
              <Home size={16} />
              Home
            </span>
          </button>
          <button onClick={() => scrollToSection(featuresRef)} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition">
            <span className="flex items-center gap-2">
              <Layers size={16} />
              Features
            </span>
          </button>
          {/* <button onClick={() => scrollToSection(benefitsRef)} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition">
            <span className="flex items-center gap-2">
              <Award size={16} />
              Benefits
            </span>
          </button> */}
        </div>
      </nav>

      {/* Home Section */}
      <section ref={homeRef} className="relative min-h-screen bg-black flex items-center justify-center">
  <div className="absolute inset-y-0 left-0 h-full w-px">
  </div>
  
  <div className="absolute inset-y-0 right-0 h-full w-px">
    
  </div>
  
  <div className="absolute inset-x-0 bottom-0 h-px w-full">
    
  </div>

  <div className="relative w-full px-4 text-center z-10 py-16 md:py-0">
  <h1 className="relative z-10 mx-auto max-w-4xl text-center text-4xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 drop-shadow-sm"style={{ fontFamily: 'sans-serif     ' }}>THE FUTURE OF DECENTRALIZED INNOVATION</h1>
    
    <div className="h-[20rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="mt-6"
      >
        <TypewriterEffectSmooth 
          words={[
            {
              text: "Re-Sync",
              className: "text-4xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 drop-shadow-sm"
            }
          ]}
          className="flex flex-col items-center justify-center"
        />
      </motion.div> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        className="mt-12 space-x-4"
      >
      </motion.div>
      
      <div className="w-full md:w-[40rem] h-70 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  </div>
</section>

      {/* Features Section */}
      <section ref={featuresRef} className="relative py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-2 text-600 text-sm md:text-base font-mono tracking-wider text-center text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 drop-shadow-sm">
            BLOCKCHAIN POWERED FEATURES
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 drop-shadow-sm">
            Key Features
          </h2>

          <div className="h-[20rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingLensCards
              items={testimonials.map(item => ({
                title: item.title,
                description: item.quote,
                imageSrc: item.imageSrc
              }))}
              direction="right"
              speed="fast"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      

      {/* CTA Section */}
      <div className="bg-black text-white py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to Innovate?</h2>
        <p className="max-w-2xl mx-auto mb-6">Join our community of innovators and start protecting your ideas today.</p>
        <Link href="/signup">
        <button 
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
        >
        Connect Wallet
        </button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-4 text-center">
        <p>&copy; 2025 Decentralized Open Innovation Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
