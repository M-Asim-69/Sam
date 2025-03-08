// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] 
    backdrop-blur-lg 
    border border-white/20 rounded-xl p-3 shadow-lg z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white pl-4">Brand</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/About">About</NavLink>
          <NavLink href="/Contact">Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white relative z-50"    
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`absolute top-full left-0 w-full rounded-lg 
        backdrop-blur-lg 
        border border-white/20 shadow-xl transition-all duration-300 ease-in-out transform 
        ${isOpen ? "bg-gray-900 backdrop-blur-lg opacity-90 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <div className="flex flex-col items-start space-y-2 px-6 py-4">
          <NavLink href="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink href="/About" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink href="/Contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

// NavLink Component
function NavLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block w-full px-6 py-3 text-left text-white 
      hover:bg-white/20 hover:text-white hover:scale-105 
      transition-all duration-300 ease-in-out rounded-lg"
    >
      {children}
    </Link>
  );
}
