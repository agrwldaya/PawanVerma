"use client"

import { useState, useRef, useEffect } from "react"

const AvailableOn = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)
  const scrollContainerRef = useRef(null)
  const autoScrollIntervalRef = useRef(null)

  // Using placeholder paths for the images
  const amazonLogo = "/amazon.png"
  const flipkartLogo = "/flipcart.jpg"
  const kindleLogo = "/amazonkindle.png"
  const goodreadsLogo = "/Goodreads.png"
  const bgimage = "/library.jpg"

  const logos = [
    { src: amazonLogo, alt: "Amazon" },
    { src: flipkartLogo, alt: "Flipkart" },
    { src: kindleLogo, alt: "Amazon Kindle" },
    { src: goodreadsLogo, alt: "Goodreads" },
  ]

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (!scrollContainerRef.current) return

      const containerWidth = scrollContainerRef.current.clientWidth
      const cardWidth = 160 // Approximate width of a logo card including margins
      const visibleCount = Math.floor(containerWidth / cardWidth)

      setTotalSlides(Math.max(0, logos.length - Math.max(1, visibleCount)))
    }

    updateVisibleSlides()
    window.addEventListener("resize", updateVisibleSlides)

    return () => {
      window.removeEventListener("resize", updateVisibleSlides)
    }
  }, [logos.length])

  // Auto-scrolling functionality
  useEffect(() => {
    if (totalSlides > 0) {
      autoScrollIntervalRef.current = setInterval(() => {
        const nextSlide = (activeSlide + 1) % (totalSlides + 1)
        scrollToSlide(nextSlide)
      }, 3000) // Change slide every 3 seconds
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
    }
  }, [activeSlide, totalSlides])

  const scrollToSlide = (index) => {
    setActiveSlide(index)
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector("div").offsetWidth
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      })
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft
      const cardWidth = scrollContainerRef.current.querySelector("div").offsetWidth
      const newActiveSlide = Math.round(scrollLeft / cardWidth)

      if (newActiveSlide !== activeSlide) {
        setActiveSlide(newActiveSlide)

        // Reset auto-scroll timer when user manually scrolls
        if (autoScrollIntervalRef.current) {
          clearInterval(autoScrollIntervalRef.current)
          autoScrollIntervalRef.current = setInterval(() => {
            const nextSlide = (activeSlide + 1) % (totalSlides + 1)
            scrollToSlide(nextSlide)
          }, 3000)
        }
      }
    }
  }

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
      <div className="relative md:hidden w-full max-w-full px-4">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-6 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={handleScroll}
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

        {/* Pagination dots for mobile */}
        {totalSlides > 0 && (
          <div className="flex justify-center mt-4">
            {[...Array(totalSlides + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`mx-1 rounded-full w-3 h-3 ${index === activeSlide ? "bg-yellow-500" : "bg-gray-300"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default AvailableOn

