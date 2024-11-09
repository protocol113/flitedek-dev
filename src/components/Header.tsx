import React from 'react';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full z-50 bg-dark/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center">
            <img src="/img/logo.png" alt="Flitedek Logo" className="h-8" />
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-primary transition"
            >
              About
            </a>
            <a
              href="#benefits"
              className="text-gray-300 hover:text-primary transition"
            >
              Benefits
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-primary transition"
            >
              Testimonials
            </a>
            <button className="btn-gradient-fill">
              <span className="block px-8 py-4">Partner With Us</span>
            </button>
          </nav>

          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
