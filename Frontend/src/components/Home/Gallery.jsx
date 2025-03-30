"use client"




import { useRef } from "react"

const Gallery = () => {
  const scrollContainerRef = useRef(null)

  const images = [
    {
      src:"/gallery01.jpeg",
      alt: "Pawan Verma speaking at an event",
      className: "col-span-2 md:col-span-1 row-span-2",
    },
    {
      src: "/gallery02.jpeg",
      alt: "Pawan Verma at desk",
    },
    {
      src: "/gallery03.png",
      alt: "Pawan Verma at book launch",
    },
    {
      src: "/gallery04.jpeg",
      alt: "Pawan Verma with award",
    },
    {
      src: "/gallery05.jpeg",
      alt: "Pawan Verma on stage",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-0.5 w-12 bg-[#B8860B]" />
            <h2 className="text-2xl md:text-3xl font-bold">Dig A Little Deeper Into My Life.</h2>
            <div className="h-0.5 w-12 bg-[#B8860B]" />
          </div>
        </div>

        {/* Desktop view - Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className={image.className || ""}>
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Mobile view - Horizontal scroll */}
        <div
          ref={scrollContainerRef}
          className="flex md:hidden overflow-x-auto pb-6 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-[280px] w-[280px] h-[200px] flex-shrink-0 mx-2">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

