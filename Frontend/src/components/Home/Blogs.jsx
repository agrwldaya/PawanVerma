

import { useState, useRef, useEffect } from "react"
import { Clock, MessageSquare, User } from "lucide-react"
import img from "/Hero01.jpeg";

const BlogCard = ({ image, title, excerpt, author, readTime, comments }) => {
  return (
    <div className="bg-white shadow-md h-auto  rounded-md overflow-hidden min-w-[280px] w-full md:w-[350px] flex-shrink-0 ">
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.onerror = null
          e.target.src = "/placeholder.svg?height=192&width=300"
        }}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>By {author}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{readTime}</span>
          </div>
          <div className="flex items-center">
            <MessageSquare size={14} className="mr-1" />
            <span>{comments}</span>
          </div>
        </div>
        <button className="text-yellow-600 hover:text-yellow-800 text-sm font-medium">Read More...</button>
      </div>
    </div>
  )
}

const Blogs = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)
  const scrollContainerRef = useRef(null)

  const blogs = [
    {
      image:img,
      title: "Blog Title Here",
      excerpt:
        "Speaker and Management Consultant from India Speaker and Management Consultant from India Speaker and Management Consultant from India's financial services...",
      author: "Pawan Verma",
      readTime: "5 Mins",
      comments: "No Comments",
    },
    {
      image:img,
      title: "Blog Title Here",
      excerpt:
        "Speaker and Management Consultant from India Speaker and Management Consultant from India Speaker and Management Consultant from India's financial services...",
      author: "Pawan Verma",
      readTime: "7 Mins",
      comments: "No Comments",
    },
    {
      image:img,
      title: "Blog Title Here",
      excerpt:
        "Speaker and Management Consultant from India Speaker and Management Consultant from India Speaker and Management Consultant from India's financial services...",
      author: "Pawan Verma",
      readTime: "10 Mins",
      comments: "No Comments",
    },
  ]

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (!scrollContainerRef.current) return

      const containerWidth = scrollContainerRef.current.clientWidth
      const cardWidth = 350 // Approximate width of a card including margins
      const visibleCount = Math.floor(containerWidth / cardWidth)

      setTotalSlides(Math.max(0, blogs.length - Math.max(1, visibleCount)))
    }

    updateVisibleSlides()
    window.addEventListener("resize", updateVisibleSlides)

    return () => {
      window.removeEventListener("resize", updateVisibleSlides)
    }
  }, [blogs.length])

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
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-0.5 w-12 bg-[#B8860B]" />
            <h2 className="text-2xl md:text-3xl font-bold">Blogs By Me</h2>
            <div className="h-0.5 w-12 bg-[#B8860B]" />
          </div>
        </div>

        {/* Desktop view - Grid layout */}
        <div className="hidden md:grid md:grid-cols-4">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              title={blog.title}
              excerpt={blog.excerpt}
              author={blog.author}
              readTime={blog.readTime}
              comments={blog.comments}
            />
          ))}
        </div>

        {/* Mobile view - Horizontal scroll */}
        <div className="md:hidden">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={handleScroll}
          >
            {blogs.map((blog, index) => (
              <BlogCard
                key={index}
                image={blog.image}
                title={blog.title}
                excerpt={blog.excerpt}
                author={blog.author}
                readTime={blog.readTime}
                comments={blog.comments}
              />
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

        <div className="text-center mt-8">
          <button className="bg-yellow-500 text-white px-8 py-2 rounded-md hover:bg-yellow-600 transition duration-300">
            View More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blogs

