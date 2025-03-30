import image01 from '/Hero01.jpeg';
import image02 from '/Hero02.jpg';

const Hero = () => {
  return (
    <section id="home" className="bg-[#f5e9d1] py-12 w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Quote and CTA */}
        <div className="flex flex-col-reverse md:flex-row items-center text-center md:text-left w-full gap-8 md:gap-16">
          <div className="md:w-1/2 flex flex-col items-center md:items-start">
            <blockquote className="text-xl sm:text-2xl md:text-4xl font-bold mb-6 md:leading-snug">
              "If you continue doing business today with the methods of yesterday, you are bound to go out of business tomorrow."
            </blockquote>
            <button className="border-2 border-black px-6 py-2 text-sm sm:text-base hover:bg-black hover:text-white transition duration-300">
              Know more
            </button>
          </div>
          {/* Author Image */}
          <div className="md:w-1/2 flex justify-center">
            <img src={image02} alt="Pawan Verma with book" className="w-48 sm:w-64 md:w-80 lg:w-96 rounded-md" />
          </div>
        </div>

        {/* About Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Yellow Curved Background with Image */}
          <div className="relative flex justify-center md:w-1/3 lg:w-1/2">
            <div className="bg-yellow-400 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden flex items-center justify-center">
              <img src={image01} alt="Pawan Verma" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Bio Text */}
          <div className="md:w-2/3 lg:w-1/2 text-center md:text-left px-4">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Dr. Pawan Verma is an Author, Thought Leader, Professional Speaker, and Management Consultant from India's financial services sector. His leadership vision stems from his rich experience in guiding start-ups, serving on boards, and leading business initiatives in large organizations such as the Reliance Group of Industries, Reliance ADA Group, LIC of India, and an Indo-Japanese start-up, Star Union Dai-ichi Life Insurance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;