import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const LandingPage: React.FC = () => {
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

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Empowering Innovators with Blockchain</h2>
        <p className="max-w-2xl mx-auto">Timestamp your ideas, collaborate securely, and earn tokenized rewards.</p>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* CTA Section */}
      <div className="bg-green-600 text-white py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Get Started</h2>
        <Button 
          onClick={handleConnect} 
          variant="outline" 
          className="bg-white text-green-600 hover:bg-gray-100"
        >
          Connect Wallet
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-4 text-center">
        <p>&copy; 2025 Decentralized Open Innovation Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;