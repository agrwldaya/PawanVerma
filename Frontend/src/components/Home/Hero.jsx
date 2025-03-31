import image01 from '/Hero01.png';
import { ChevronRight } from 'lucide-react';
import img03 from '/gallery03.png';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-b from-white to-[#f5e9d1] w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Quote and CTA */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12 lg:gap-20">
          <div className="md:w-1/2 flex flex-col items-center md:items-start">
            <div className="w-16 h-0.5 bg-[#B8860B] mb-8 hidden md:block" />
            <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:leading-tight text-center md:text-left text-gray-800">
              "If you continue doing business today with the methods of yesterday, you are bound to go out of business tomorrow."
            </blockquote>
            <button className="group bg-[#B8860B] px-8 py-3 text-white text-base font-semibold hover:bg-[#996D1D] transition-colors duration-300 flex items-center gap-2">
              Know more
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          {/* Author Image */}
          <div className="flex justify-center md:max-w-[500px]">
            <img
              src={image01}
              alt="Professional businessman"
              className="w-full border-2 caret-neutral-400  mt-3  bg-[#3C2E26]   max-w-xs  sm:max-w-sm md:max-w-md lg:max-w-xl object-cover rounded-lg"
            />
          </div>
        </div>

        {/* About Section */}
        <div className="mt-8 md:mt-32 lg:mt-32 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="md:w-1/3 lg:w-1/2 flex  ">
            <div className="relative group">
              {/* Main image container */}
              <div className="relative  w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#d7a547] shadow-2xl transition-transform duration-500 hover:scale-105">
                <img 
                  src={img03}
                  alt="Dr. Pawan Verma" 
                  className="w-full h-full  object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="md:w-2/3 lg:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 border-b-2 border-[#B8860B] pb-4 mb-6">
              Meet Dr. Pawan Verma
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Dr. Pawan Verma is an Author, Thought Leader, Professional Speaker, and Management Consultant from India's financial services sector. His leadership vision stems from his rich experience in guiding start-ups, serving on boards, and leading business initiatives in large organizations such as the Reliance Group of Industries, Reliance ADA Group, LIC of India, and an Indo-Japanese start-up, Star Union Dai-ichi Life Insurance.
            </p>
            <div className="w-24 h-0.5 bg-[#B8860B]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

