import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Our Partners Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the growing number of brands and organizations that have found success
            through partnership with FliteDek.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="John Smith"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">John Smith</h3>
                <p className="text-gray-600">Marketing Director, TechPro</p>
              </div>
            </div>
            <p className="text-gray-600">
              "Partnering with FliteDek has been transformative for our brand. The level of
              engagement and brand awareness we've achieved through FPV racing has exceeded
              all expectations."
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Sarah Johnson"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">Sarah Johnson</h3>
                <p className="text-gray-600">Pro FPV Pilot</p>
              </div>
            </div>
            <p className="text-gray-600">
              "FliteDek has revolutionized how we connect with fans and sponsors. Their
              platform has created unprecedented opportunities for pilots to grow their careers."
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Michael Chen"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">Michael Chen</h3>
                <p className="text-gray-600">CEO, DroneMax</p>
              </div>
            </div>
            <p className="text-gray-600">
              "The data insights and community engagement opportunities provided by FliteDek
              have helped us better understand and serve the FPV racing community."
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" alt="Tesla" className="h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}