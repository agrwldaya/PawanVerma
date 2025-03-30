import React from 'react';
import { Camera } from 'lucide-react';

const Gallery = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#f5e9d1] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-0.5 w-12 bg-[#B8860B]" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Dig A Little Deeper Into My Life
            </h2>
            <div className="h-0.5 w-12 bg-[#B8860B]" />
          </div>
          <div className="inline-flex items-center gap-2 text-gray-600 mt-4">
            <Camera className="w-4 h-4 text-[#B8860B]" />
            <span>Moments that define the journey</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Large featured image */}
          <div className="col-span-2 md:col-span-1 row-span-2 group relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/gallery01.jpeg"
              alt="Pawan Verma speaking at an event"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-semibold">Keynote Speaker</h3>
              <p className="text-sm text-gray-200">Sharing insights that transform businesses</p>
            </div>
          </div>

          {/* Regular grid images */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/gallery02.jpeg"
              alt="Pawan Verma at desk"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-sm font-semibold">Strategic Planning</h3>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/gallery03.png"
              alt="Pawan Verma at book launch"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-sm font-semibold">Book Launch Event</h3>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/gallery04.jpeg"
              alt="Pawan Verma with award"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-sm font-semibold">Achievement Recognition</h3>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/gallery05.jpeg"
              alt="Pawan Verma on stage"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-sm font-semibold">Public Speaking</h3>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-3 bg-[#B8860B]/10 rounded-lg">
            <p className="text-[#B8860B] font-medium">
              A visual journey through leadership, innovation, and transformation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;