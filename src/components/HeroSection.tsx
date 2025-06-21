
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 via-purple-50 to-blue-50 flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Learn with{" "}
          <span className="bg-gradient-to-r from-streva-purple to-streva-blue bg-clip-text text-transparent">
            AI-Powered
          </span>
          <br />
          Smart Tutoring
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Our AI-powered smart tutor adapts to your unique learning style,
          providing instant support, step-by-step explanations.
        </p>

        <Button 
          size="lg" 
          className="bg-gradient-to-r from-streva-purple to-streva-purple-dark hover:from-streva-purple-dark hover:to-streva-purple text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Start Free Trial
        </Button>

        {/* Dashboard Preview */}
        <div className="mt-16 relative">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden max-w-5xl mx-auto">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200/50 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-gradient-to-br from-streva-purple to-streva-purple-dark rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">S</span>
                </div>
                <span className="font-semibold text-gray-900">Streva</span>
                <div className="flex items-center space-x-2 ml-8">
                  <Button variant="ghost" size="sm" className="text-streva-purple bg-streva-purple/10">
                    Ask AI
                  </Button>
                  <div className="w-8 h-8 rounded-full bg-streva-purple flex items-center justify-center">
                    <span className="text-white text-sm">?</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-streva-orange text-white flex items-center justify-center text-sm font-semibold">
                  SR
                </div>
                <span className="text-sm text-gray-600">Syed Roni</span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Good morning, Syed 👋</h2>
                <p className="text-gray-600">Welcome to Streva, Check your priority learning.</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-4 rounded-xl">
                  <div className="text-2xl font-bold">100</div>
                  <div className="text-sm opacity-90">Point</div>
                </div>
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4 rounded-xl">
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-sm opacity-90">Finish</div>
                </div>
                <div className="bg-gradient-to-r from-pink-400 to-pink-500 text-white p-4 rounded-xl">
                  <div className="text-2xl font-bold">08</div>
                  <div className="text-sm opacity-90">Hours</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-xl mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="bg-white/20 text-xs px-2 py-1 rounded-full">New</span>
                    <h3 className="text-lg font-semibold mt-2">Feature Discussion</h3>
                    <p className="text-sm opacity-90 mt-1">Smart Tutoring are a new feature in "Feature Discussion" Can be explain the material problem chat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
