import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="curved-line -top-32 left-0 opacity-10" />
      <div className="curved-line bottom-0 right-0 opacity-10" />

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/img/BG.jpeg)',
          backgroundSize: 'contain',
          backgroundPosition: 'bottom',
          filter: 'brightness(0.3)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The Future of Competitive Motorsports, Driven By{' '}
            <span className="gradient-text">Innovation</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Join the pioneering community that's shaping the FPV drone racing
            industry. Connect with top pilots, engage with brands, and be part
            of the revolution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-gradient-border">
              <span className="block px-8 py-4">
                Become a Partner
                <ArrowRight className="inline-block ml-2" size={20} />
              </span>
            </button>
            <button className="btn-gradient-fill">
              <span className="block px-8 py-4">
                Discover FliteDek
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}