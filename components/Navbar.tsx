import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-16 border-b border-gray-200 shadow-sm bg-white">
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-6">
        
        <div className="flex items-center">
          <div className="text-2xl font-bold text-[#2e054e]">CarHub</div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-gray-700 hover:text-[#2e054e] font-medium transition-colors"
          >
            Buy Cars
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-[#2e054e] font-medium transition-colors"
          >
            Sell Car
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-[#2e054e] font-medium transition-colors"
          >
            Finance
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-[#2e054e] font-medium transition-colors"
          >
            About Us
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block px-4 py-2 text-[#2e054e] font-semibold hover:bg-gray-100 rounded-lg transition-colors">
            Sign In
          </button>
          <button className="hidden md:block px-5 py-2 bg-[#2e054e] text-white font-semibold rounded-lg hover:bg-[#1f0338] transition-colors">
            Get Started
          </button>
        </div>

        <button className="md:hidden flex flex-col gap-1.5">
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
