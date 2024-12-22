import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-blue-50 text-black shadow-md py-3">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold">
        <Link to="/"> Password Generator</Link>
           
        </div>
        <ul className="flex gap-4 text-sm">
          <li>
          <Link to="/" className="hover:text-orange-400"> Home</Link>
          </li>
          <li>
          <Link to="/about" className="hover:text-orange-400"> About</Link>
          </li>
          <li>
          <Link to="/contact" className="hover:text-orange-400"> Contact</Link>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
