
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Dashboard from "@/components/Dashboard";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      
      {/* Toggle Button for Demo */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => setShowDashboard(true)}
          className="bg-streva-purple hover:bg-streva-purple-dark text-white px-6 py-3 rounded-full shadow-lg"
        >
          View Dashboard →
        </Button>
      </div>
      
      {/* Back Button when in Dashboard */}
      {showDashboard && (
        <div className="fixed bottom-8 left-8 z-50">
          <Button
            onClick={() => setShowDashboard(false)}
            variant="outline"
            className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
          >
            ← Back to Landing
          </Button>
        </div>
      )}
    </div>
  );
};

export default Index;
