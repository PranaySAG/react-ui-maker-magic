
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-streva-purple to-streva-purple-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Streva</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-streva-purple transition-colors">Product</a>
            <a href="#" className="text-gray-700 hover:text-streva-purple transition-colors">Solutions</a>
            <a href="#" className="text-gray-700 hover:text-streva-purple transition-colors">Resources</a>
            <a href="#" className="text-gray-700 hover:text-streva-purple transition-colors">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-streva-purple transition-colors">Enterprise</a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-streva-purple">
              Log In
            </Button>
            <Button className="bg-streva-purple hover:bg-streva-purple-dark text-white px-6 py-2 rounded-full">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
