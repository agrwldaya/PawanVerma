import amazonLogo from '/amazon.png';
import flipkartLogo from '/flipcart.jpeg';
import kindleLogo from '/amazonkindle.png';
import goodreadsLogo from '/Goodreads.png';

const AvailableOn = () => {
  return (
    <section>
      <hr />
      <div className="text-center mb-10 mt-4">
        <h2 className="text-2xl md:text-3xl font-bold relative inline-block">
          Available On
          <hr />
        </h2>
        
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        <div className="w-36 h-36 flex items-center justify-center">
          <img src={amazonLogo} alt="Amazon" className="max-h-full max-w-full object-contain" />
        </div>
        <div className="w-24 h-24 flex items-center justify-center">
          <img src={flipkartLogo} alt="Flipkart" className="max-h-full max-w-full object-contain" />
        </div>
        <div className="w-24 h-24 flex items-center justify-center">
          <img src={kindleLogo} alt="Amazon Kindle" className="max-h-full max-w-full object-contain" />
        </div>
        <div className="w-24 h-24 flex items-center justify-center">
          <img src={goodreadsLogo} alt="Goodreads" className="max-h-full max-w-full object-contain" />
        </div>
      </div>
      <hr />
    </section>
  );
};

export default AvailableOn;