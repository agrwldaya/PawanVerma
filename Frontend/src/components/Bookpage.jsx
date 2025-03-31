"use client"

import { useState, useRef, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const BookPage = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)
  const otherBooksRef = useRef(null)
  const testimonialRef = useRef(null)

  const otherBooks = [
    {
      title: "The 10X Leader",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-29%20151230-kEnyfr8PUmbUiTVP3Q52EXHoDhM7Gq.png",
      description:
        "Becoming a great leader means focusing on the right things at the right time. This book deals of leadership as a journey rather than a destination.",
    },
    {
      title: "UNBORN",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-29%20151230-kEnyfr8PUmbUiTVP3Q52EXHoDhM7Gq.png",
      description:
        "While there is nothing wrong with the conventional wisdom that says that the reader and the right time to implement it, this book takes the reader and the right time to a new level.",
    },
    {
      title: "NO CLOSURE NO FORGIVENESS",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-29%20151230-kEnyfr8PUmbUiTVP3Q52EXHoDhM7Gq.png",
      description:
        "Fiction becomes a brilliant showcase when the narrator responsible for the story telling is able to create a world where you go into a reflective stance.",
    },
  ]

  const testimonials = [
    {
      name: "Savannah Nguyen",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-29%20151325-Xfq6MiaV2U3qjl9rK0zcOzSzkTMesx.png",
      rating: 5,
      testimonial:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      name: "Floyd Miles",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-29%20151325-Xfq6MiaV2U3qjl9rK0zcOzSzkTMesx.png",
      rating: 4,
      testimonial:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ]

  useEffect(() => {
    const updateOtherBooksSlides = () => {
      if (!otherBooksRef.current) return

      const containerWidth = otherBooksRef.current.clientWidth
      const cardWidth = 280 // Approximate width of a card including margins
      const visibleCount = Math.floor(containerWidth / cardWidth)

      setTotalSlides(Math.max(0, otherBooks.length - Math.max(1, visibleCount)))
    }

    updateOtherBooksSlides()
    window.addEventListener("resize", updateOtherBooksSlides)

    return () => {
      window.removeEventListener("resize", updateOtherBooksSlides)
    }
  }, [otherBooks.length])

  const scrollToSlide = (index) => {
    setActiveSlide(index)
    if (otherBooksRef.current) {
      const cardWidth = otherBooksRef.current.querySelector("div").offsetWidth
      otherBooksRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      })
    }
  }

  const handleScroll = () => {
    if (otherBooksRef.current) {
      const scrollLeft = otherBooksRef.current.scrollLeft
      const cardWidth = otherBooksRef.current.querySelector("div").offsetWidth
      const newActiveSlide = Math.round(scrollLeft / cardWidth)

      if (newActiveSlide !== activeSlide) {
        setActiveSlide(newActiveSlide)
      }
    }
  }

  return (
    <div className="bg-white">
      {/* Book Details Section */}
      <section className="py-12 bg-[#e6f7f9]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Book Cover */}
            <div className="md:w-1/3 flex justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-31%20213349-QY8OLCJ9Itu5QI4L7JhYuvJAzPIVqu.png"
                alt="Age of The IMPERFECT LEADER"
                className="w-full max-w-[250px] object-contain"
              />
            </div>

            {/* Book Details */}
            <div className="md:w-2/3">
              <h1 className="text-2xl md:text-3xl font-bold text-[#1a5276] mb-4">Age of The IMPERFECT LEADER</h1>
              <p className="text-sm md:text-base mb-6">
                Built on the concept of 'Imperfect Leadership', this book goes beyond the merely associated with
                impatience and explores the positive attributes that are associated with impatience. It is a powerful
                concept that challenges what has been taught for good leadership, and it's a perfect choice for those
                who want to lead differently.
              </p>
              <p className="text-sm md:text-base mb-6">
                It is a powerful concept that challenges what has been taught for good leadership, and it's a perfect
                choice for those who want to lead differently.
              </p>

              <div className="flex space-x-4 mb-6">
                <button className="bg-[#f39c12] text-white px-6 py-2 rounded-sm hover:bg-[#e67e22] transition duration-300">
                  Buy Now
                </button>
                <button className="border border-[#f39c12] text-[#f39c12] px-6 py-2 rounded-sm hover:bg-[#f39c12] hover:text-white transition duration-300">
                  Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available On Section */}
      <section className="py-12 bg-white relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold inline-block relative">
              Available on
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#f39c12]"></div>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="w-24 md:w-32">
              <img src="/placeholder.svg" alt="Amazon" className="w-full" />
            </div>
            <div className="w-24 md:w-32">
              <img src="/placeholder.svg" alt="Flipkart" className="w-full" />
            </div>
            <div className="w-24 md:w-32">
              <img src="/placeholder.svg" alt="Amazon Kindle" className="w-full" />
            </div>
            <div className="w-24 md:w-32">
              <img src="/placeholder.svg" alt="Goodreads" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* My Other Books Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold inline-block relative">
              My Other Books
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#f39c12]"></div>
            </h2>
            <img
              src="/book-icon.png"
              alt="Book icon"
              className="inline-block ml-2 h-6 w-6"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = "/placeholder.svg?height=24&width=24"
              }}
            />
          </div>

          {/* Desktop view - Grid layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherBooks.map((book, index) => (
              <div key={index} className="bg-[#f5e9d1] rounded-md overflow-hidden shadow-md">
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{book.title}</h3>
                  <p className="text-sm mb-4 line-clamp-3">{book.description}</p>
                  <button className="bg-[#f39c12] text-white px-4 py-2 rounded-sm w-full hover:bg-[#e67e22] transition duration-300">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile view - Horizontal scroll */}
          <div className="md:hidden">
            <div
              ref={otherBooksRef}
              className="flex overflow-x-auto pb-6 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onScroll={handleScroll}
            >
              {otherBooks.map((book, index) => (
                <div
                  key={index}
                  className="min-w-[280px] w-[280px] flex-shrink-0 mx-2 bg-[#f5e9d1] rounded-md overflow-hidden shadow-md"
                >
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{book.title}</h3>
                    <p className="text-sm mb-4 line-clamp-3">{book.description}</p>
                    <button className="bg-[#f39c12] text-white px-4 py-2 rounded-sm w-full hover:bg-[#e67e22] transition duration-300">
                      Read More
                    </button>
                  </div>
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
                    className={`mx-1 rounded-full w-3 h-3 ${index === activeSlide ? "bg-[#f39c12]" : "bg-gray-300"}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Book Testimonials Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold inline-block relative">
              Book Testimonials
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#f39c12]"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = "/placeholder.svg?height=64&width=64"
                    }}
                  />
                  <div>
                    <div className="flex mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < testimonial.rating ? "text-[#f39c12] fill-[#f39c12]" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{testimonial.testimonial}</p>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8">
            <button className="mx-1 rounded-full w-3 h-3 bg-[#f39c12]" aria-label="Page 1" />
            <button className="mx-1 rounded-full w-3 h-3 bg-gray-300" aria-label="Page 2" />
            <button className="mx-1 rounded-full w-3 h-3 bg-gray-300" aria-label="Page 3" />
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-4">
            <button className="bg-gray-200 hover:bg-gray-300 rounded-md p-2" aria-label="Previous testimonial">
              <ChevronLeft size={20} />
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 rounded-md p-2" aria-label="Next testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BookPage

