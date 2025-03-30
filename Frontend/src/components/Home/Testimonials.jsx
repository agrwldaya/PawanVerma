 
import user01 from '/user01.jpg'
import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const TestimonialCard = ({ name, image, rating, testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
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

  const testimonials = [
    {
      name: "Savannah Nguyen",
      image:user01,
      rating: 4,
      testimonial:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia...",
    },
    {
      name: "Floyd Miles",
      image:user01,
      rating: 4,
      testimonial:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      name: "Jane Cooper",
      image:user01,
      rating: 5,
      testimonial:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
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
          <p className="text-gray-600 mt-4">  Speaker and Management Consultant from India Speaker and Management Consultant from India Speaker and
          Management</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(activeSlide, activeSlide + 2).map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                image={testimonial.image}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={prevSlide}
              className="mx-1 bg-gray-200 hover:bg-gray-300 rounded-md p-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`mx-1 rounded-full w-3 h-3 ${index === activeSlide ? "bg-yellow-500" : "bg-gray-300"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
            <button
              onClick={nextSlide}
              className="mx-1 bg-gray-200 hover:bg-gray-300 rounded-md p-2"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

