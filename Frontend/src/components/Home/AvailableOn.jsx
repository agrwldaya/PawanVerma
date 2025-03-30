 
import { useRef } from "react"

const AvailableOn = () => {
  const scrollContainerRef = useRef(null)

  // Using placeholder paths for the images
  const amazonLogo = "/amazon.png"
  const flipkartLogo = "/flipcart.jpg"
  const kindleLogo = "/amazonkindle.png"
  const goodreadsLogo = "/Goodreads.png"
  const bgimage = "library.jpg"

  const logos = [
    { src: amazonLogo, alt: "Amazon" },
    { src: flipkartLogo, alt: "Flipkart" },
    { src: kindleLogo, alt: "Amazon Kindle" },
    { src: goodreadsLogo, alt: "Goodreads" },
  ]

  return (
    <section
      className="relative w-full h-[400px] bg-cover bg-center flex flex-col items-center justify-center mt-16"
      style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-white/90"></div>

      <div className="relative text-center mb-10 mt-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-0.5 w-12 bg-[#B8860B]" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Available on</h2>
          <div className="h-0.5 w-12 bg-[#B8860B]" />
        </div>
      </div>

      {/* Desktop view - Flex wrap layout */}
      <div className="relative hidden md:flex flex-wrap justify-evenly items-center gap-8 md:gap-16 w-full max-w-4xl mx-auto">
        {logos.map((logo, index) => (
          <div key={index} className="w-36 h-36 flex items-center justify-center">
            <img
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              className="max-h-full max-w-full object-contain"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = "/placeholder.svg?height=100&width=100"
              }}
            />
          </div>
        ))}
      </div>

      {/* Mobile view - Horizontal scroll */}
      <div ref={scrollContainerRef} className="relative md:hidden w-full max-w-full px-4">
        <div
          className="flex overflow-x-auto pb-6 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="min-w-[160px] w-[160px] h-36 flex-shrink-0 mx-4 flex items-center justify-center"
            >
              <img
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = "/placeholder.svg?height=100&width=100"
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AvailableOn

