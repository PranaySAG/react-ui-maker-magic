
import { Button } from "@/components/ui/button";
import { Home, Search, Settings } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-br from-streva-purple to-streva-purple-dark rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="text-xl font-semibold text-gray-900">Streva</span>
        </div>

        <nav className="space-y-2">
          <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-streva-purple/10 text-streva-purple font-medium">
            <Home size={20} />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            <span className="w-5 h-5 flex items-center justify-center text-sm">📚</span>
            <span>My Courses</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            <span className="w-5 h-5 flex items-center justify-center text-sm">📊</span>
            <span>Assessment</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            <Settings size={20} />
            <span>Settings</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="flex items-center space-x-2">
                <span className="text-streva-purple">🤖</span>
                <span>Ask AI</span>
              </Button>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-streva-purple/20 focus:border-streva-purple"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-streva-orange text-white flex items-center justify-center font-semibold">
                SR
              </div>
              <div>
                <div className="font-semibold text-gray-900">Syed Roni</div>
                <div className="text-sm text-gray-500">Product Manager</div>
              </div>
            </div>
          </div>

          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Good morning, Syed 👋</h1>
            <p className="text-gray-600">Welcome to Streva, Check your priority learning.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-6 rounded-xl">
              <div className="text-3xl font-bold mb-1">100</div>
              <div className="text-blue-100">Point</div>
            </div>
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-6 rounded-xl">
              <div className="text-3xl font-bold mb-1">24</div>
              <div className="text-orange-100">Finish</div>
            </div>
            <div className="bg-gradient-to-r from-pink-400 to-pink-500 text-white p-6 rounded-xl">
              <div className="text-3xl font-bold mb-1">08</div>
              <div className="text-pink-100">Hours</div>
            </div>
          </div>

          {/* Feature Discussion */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-2xl mb-8">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <span className="bg-white/20 text-xs px-3 py-1 rounded-full font-medium">New</span>
                <h2 className="text-2xl font-bold mt-3 mb-2">Feature Discussion</h2>
                <p className="text-indigo-100 mb-4 max-w-2xl">
                  Smart Tutoring are a new feature in "Feature Discussion" Can be explain the material problem chat.
                </p>
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Go to detail →
                </Button>
              </div>
            </div>
          </div>

          {/* My Courses */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
              <Button variant="ghost" className="text-streva-purple">View All</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-card-blue p-6 rounded-2xl text-white">
                <h3 className="font-semibold mb-2">Instagram Marketing 101</h3>
                <p className="text-sm opacity-90">Learn the basics</p>
              </div>
              
              <div className="bg-gradient-card-orange p-6 rounded-2xl text-white">
                <h3 className="font-semibold mb-2">Adobe Premiere</h3>
                <p className="text-sm opacity-90">Video editing course</p>
              </div>
              
              <div className="bg-gradient-card-pink p-6 rounded-2xl text-white">
                <h3 className="font-semibold mb-2">Hi & Backend FS Batch-2</h3>
                <p className="text-sm opacity-90">Full stack development</p>
              </div>
              
              <div className="bg-gradient-card-purple p-6 rounded-2xl text-white">
                <h3 className="font-semibold mb-2">Motion Graphics</h3>
                <p className="text-sm opacity-90">Advanced animations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
