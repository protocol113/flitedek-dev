import React from 'react';
import { BarChart3, Users, Zap } from 'lucide-react';

export function Stats() {
  return (
    <section className="py-20 bg-dark relative overflow-hidden" id="stats">
      <div className="curved-line top-0 right-0 opacity-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Why FPV Racing is the Next Big Opportunity
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The rapidly growing world of drone racing combines cutting-edge
            technology with competitive sports, attracting a highly engaged,
            tech-savvy audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="stat-card">
            <div className="icon-circle mb-6">
              <BarChart3 size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-2 gradient-text">45%</h3>
            <p className="text-gray-400">
              Annual Growth in Social Media Engagement
            </p>
          </div>

          <div className="stat-card">
            <div className="icon-circle mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-2 gradient-text">1B+</h3>
            <p className="text-gray-400">Projected Global Audience by 2030</p>
          </div>

          <div className="stat-card">
            <div className="icon-circle mb-6">
              <Zap size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-2 gradient-text">3M+</h3>
            <p className="text-gray-400">Daily Video Views</p>
          </div>
        </div>

        <div className="mt-20 gradient-card rounded-2xl p-12">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Our Core Audience
            </h3>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Young, tech-savvy innovators aged 18-34 who are early adopters of
              new technology and passionate about competitive sports. This
              demographic represents a unique and expanding market with high
              engagement rates and strong brand loyalty.
            </p>
            <button className="btn-gradient-border">
              <span className="block px-8 py-4">
                Download Audience Insights
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
