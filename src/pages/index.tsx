import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState(0);
  
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
      imageSrc: "/api/placeholder/600/400",
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

  const nextSection = () => {
    setActiveSection((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
  };

  const prevSection = () => {
    setActiveSection((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
  };

  const handleConnect = () => {
    alert("Connect your wallet");
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      {/* Header */}
      <header className="bg-slate-900 text-white py-8 text-center">
        <h1 className="text-3xl font-bold">Decentralized Open Innovation Hub</h1>
        <p className="mt-2">Protect, Collaborate, and Innovate on the Blockchain</p>
      </header>

      {/* Hero Section with Sliding Cards */}
      <div className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Slider Navigation */}
          <div className="flex justify-center space-x-4 mb-6">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(index)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === index 
                    ? `bg-${section.color.split('-')[1]}-600 text-white font-bold` 
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
          
          {/* Main Section Display */}
          <div className="relative h-96 mb-8 overflow-hidden">
            {/* We're using absolute positioning to show only the active section */}
            {sections.map((section, index) => (
              <div 
                key={index} 
                className={`absolute top-0 left-0 w-full h-full transition-all duration-500 transform ${
                  activeSection === index 
                    ? "opacity-100 translate-x-0" 
                    : activeSection > index 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                }`}
              >
                <Card className={`${section.color} text-white overflow-hidden h-full flex flex-col md:flex-row shadow-xl`}>
                  <div className="md:w-1/2 p-6 flex flex-col justify-center">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg">{section.description}</p>
                      <div className="mt-6">
                        {/* <Button variant="outline" className="bg-white/20 text-white hover:bg-white/30 border-white">
                          Learn More
                        </Button> */}
                      </div>
                    </CardContent>
                  </div>
                  <div className="md:w-1/2 bg-black/10 flex items-center justify-center p-4">
                    <img 
                      src={section.imageSrc} 
                      alt={section.imageAlt} 
                      className="max-h-full object-contain rounded shadow-lg"
                    />
                  </div>
                </Card>
              </div>
            ))}

            {/* Slider Controls */}
            <button 
              onClick={prevSection} 
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 rounded-r-full p-2 shadow-lg z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSection} 
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 rounded-l-full p-2 shadow-lg z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Progress Indicator */}
          <div className="flex justify-center space-x-2">
            {sections.map((_, index) => (
              <div 
                key={index} 
                className={`h-1 transition-all duration-300 rounded-full ${
                  activeSection === index ? "w-8 bg-blue-600" : "w-4 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Why Choose Our Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-center">IP Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">Store and timestamp ideas securely on the blockchain.</p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-center">Decentralized Voting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">Validate ideas through token-based voting.</p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-center">Token Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">Earn INNO tokens for contributions and collaborations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 text-white py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to Innovate?</h2>
        <p className="max-w-2xl mx-auto mb-6">Join our community of innovators and start protecting your ideas today.</p>
        <Button 
          onClick={handleConnect} 
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Connect Wallet
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-4 text-center">
        <p>&copy; 2025 Decentralized Open Innovation Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;