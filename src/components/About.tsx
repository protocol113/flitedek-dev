import React from 'react';
import { Globe } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-slate-50" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Drone Racing"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <Globe size={32} className="text-blue-600" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Leading the Future of FPV Drone Sports
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              FliteDek is revolutionizing the world of drone racing by creating a global hub that connects fans,
              pilots, and brands. Our mission is to elevate FPV racing into a mainstream motorsport while providing
              unprecedented opportunities for brand engagement and community growth.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Global Community</h3>
                  <p className="text-gray-600">Building a worldwide network of FPV enthusiasts and professionals</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Innovation First</h3>
                  <p className="text-gray-600">Pushing the boundaries of technology and competitive racing</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Brand Integration</h3>
                  <p className="text-gray-600">Creating meaningful connections between brands and the FPV community</p>
                </div>
              </div>
            </div>

            <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
              Explore Partnership Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}