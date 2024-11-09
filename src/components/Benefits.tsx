import React from 'react';
import { BarChart3, Users, Zap, Globe } from 'lucide-react';

export default function Benefits() {
  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Partner with FliteDek?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in shaping the future of FPV drone racing while accessing a highly engaged,
            tech-savvy audience through customized partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Users size={24} className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Brand Visibility</h3>
            <p className="text-gray-600 mb-4">
              Reach a passionate, tech-focused audience through premium placement at live events,
              digital content, and social media channels.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                Live event branding opportunities
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                Digital content integration
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                Social media exposure
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Zap size={24} className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Custom Sponsorship Packages</h3>
            <p className="text-gray-600 mb-4">
              Tailored partnerships that align with your brand's goals and target audience,
              ensuring maximum ROI and engagement.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                Flexible sponsorship tiers
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                Customized activation plans
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                Dedicated support team
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Globe size={24} className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Community Engagement</h3>
            <p className="text-gray-600 mb-4">
              Connect directly with fans through interactive experiences at live events
              and through our digital platforms.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                Fan meet-and-greets
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                Interactive workshops
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                Online community events
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <BarChart3 size={24} className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Data Insights</h3>
            <p className="text-gray-600 mb-4">
              Access detailed analytics and insights about audience engagement,
              demographics, and campaign performance.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                Real-time analytics
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                Demographic reports
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                ROI tracking
              </li>
            </ul>
          </div>
        </div>

        {/* Case Study */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Success Story: TechPro Racing Series</h3>
            <p className="text-lg mb-6">
              Through our partnership program, TechPro achieved a 300% increase in brand awareness
              among tech enthusiasts and secured a dedicated following in the FPV community through
              sponsored race events and digital content integration.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition">
              Read Full Case Study
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}