import React from 'react';
import { BookMarked } from 'lucide-react';

const AvailableOn = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#f5e9d1]">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-0.5 w-12 bg-[#B8860B]" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Available On
            </h2>
            <div className="h-0.5 w-12 bg-[#B8860B]" />
          </div>
          <p className="text-gray-600 mt-4">Find Dr. Verma's books on leading platforms</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Amazon */}
          <div className="group relative">
            <div className="absolute inset-0 bg-[#B8860B]/10 rounded-lg transform rotate-3 transition-transform group-hover:rotate-6" />
            <div className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform group-hover:-translate-y-2 group-hover:shadow-xl">
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img src="/amazon.png" alt="Amazon" className="max-h-full max-w-full object-contain  transition-transform group-hover:scale-110" />
                </div>
              </div>
            </div>
          </div>

          {/* Flipkart */}
          <div className="group relative">
            <div className="absolute inset-0 bg-[#B8860B]/10 rounded-lg transform -rotate-3 transition-transform group-hover:-rotate-6" />
            <div className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform group-hover:-translate-y-2 group-hover:shadow-xl">
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img src="/flipcart.jpeg" alt="Flipkart" className="max-h-full max-w-full object-contain transition-transform group-hover:scale-110" />
                </div>
              </div>
            </div>
          </div>

          {/* Kindle */}
          <div className="group relative">
            <div className="absolute inset-0 bg-[#B8860B]/10 rounded-lg transform rotate-3 transition-transform group-hover:rotate-6" />
            <div className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform group-hover:-translate-y-2 group-hover:shadow-xl">
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img src="/amazonkindle.png" alt="Amazon Kindle" className="max-h-full max-w-full object-contain transition-transform group-hover:scale-110" />
                </div>
              </div>
            </div>
          </div>

          {/* Goodreads */}
          <div className="group relative">
            <div className="absolute inset-0 bg-[#B8860B]/10 rounded-lg transform -rotate-3 transition-transform group-hover:-rotate-6" />
            <div className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform group-hover:-translate-y-2 group-hover:shadow-xl">
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img src="/Goodreads.png" alt="Goodreads" className="max-h-full max-w-full object-contain transition-transform group-hover:scale-110" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 text-[#B8860B] font-medium">
            <BookMarked className="w-5 h-5" />
            <span>Available worldwide in multiple formats</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailableOn;