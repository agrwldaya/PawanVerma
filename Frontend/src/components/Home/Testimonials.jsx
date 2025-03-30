"use client"

import { useState, useRef, useEffect } from "react"
import { Star } from "lucide-react"
import usero2 from '/user02.jpg'

const TestimonialCard = ({ name, image, rating, testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md min-w-[300px] w-full md:w-[350px] flex-shrink-0 mx-2">
      <div className="flex items-center mb-4">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-16 h-16 rounded-full mr-4 object-cover"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = "/placeholder.svg?height=64&width=64"
          }}
        />
        <div>
          <div className="flex mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} />
            ))}
          </div>
          <h3 className="font-bold">{name}</h3>
        </div>
      </div>
      <p className="text-gray-600 text-sm">{testimonial}</p>
    </div>
  )
}

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)
  const [visibleSlides, setVisibleSlides] = useState(0)
  const scrollContainerRef = useRef(null)

  const testimonials = [
    {
      name: "	Kamalji Sahay, (Former MD & CEO), Star Union Dai-ichi Life Insurance",
      image:usero2,
      rating: 4,
      testimonial:
        "Those professionals interested in understanding what makes a person a leader and what makes a leader successful must read the Age of the Imperfect Leader. Students and teachers would also enjoy reading the book which is written in a very simple and convincing style. As one finishes reading the book one may spontaneously embrace the truth: Leadership doesn’t require you to be perfect",
    },
    {
      name: "	Manish Mimani, (Founder & CEO), Protectt.ai Labs",
      image:  usero2,
      rating: 4,
      testimonial:
        "It’s a must read for all the new generation leaders who wants to hone their leadership. It slowly takes us to understand that there is nothing called a perfect leader but the one who continually keep discovering, learning and create an environment of success is always a winner. All these has been explained in very easy to read and comprehensible lingo which is the most unique part of book",
    },
   
    
  ]

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (!scrollContainerRef.current) return

      const containerWidth = scrollContainerRef.current.clientWidth
      const cardWidth = 350 // Approximate width of a card including margins
      const visibleCount = Math.floor(containerWidth / cardWidth)

      setVisibleSlides(Math.max(1, visibleCount))
      setTotalSlides(Math.max(0, testimonials.length - visibleCount))
    }

    updateVisibleSlides()
    window.addEventListener("resize", updateVisibleSlides)

    return () => {
      window.removeEventListener("resize", updateVisibleSlides)
    }
  }, [testimonials.length])

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
      }
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#f5e9d1]">
      <div className="container mx-auto px-4">
      <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-0.5 w-12 bg-[#B8860B]" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Book Testimonials
            </h2>
            <div className="h-0.5 w-12 bg-[#B8860B]" />
          </div>
          <p className="text-gray-600 mt-4">Speaker and Management Consultant from India Speaker and Management Consultant from India Speaker and
          Management</p>
        </div>
       
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={handleScroll}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                image={testimonial.image}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>

          {totalSlides > 0 && (
            <div className="flex justify-center mt-8">
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
      </div>
    </section>
  )
}

export default Testimonials

