import { Clock, MessageSquare, User, Play } from "lucide-react"
import { useState } from "react"

import blog01 from '/Hero01.jpeg'

const BlogCard = ({ media, mediaType, title, excerpt, author, readTime, comments, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-48 overflow-hidden">
        {mediaType === "video" ? (
          <>
            <video
              src={media || "/placeholder.mp4"}
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              controls={isPlaying}
              playsInline
              poster={blog01}
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = "none";
                const parentDiv = e.target.parentNode;
                const placeholderImg = document.createElement("img");
                placeholderImg.src = blog01;
                placeholderImg.className = "w-full h-48 object-cover";
                parentDiv.appendChild(placeholderImg);
              }}
            />
            {!isPlaying && (
              <button 
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-[2px] transition-all duration-300 hover:bg-opacity-50"
              >
                <div className="bg-white bg-opacity-90 rounded-full p-4 transform transition-all duration-300 hover:scale-110 hover:bg-opacity-100 group">
                  <Play size={24} className="text-yellow-600 ml-0.5 group-hover:text-yellow-700" />
                </div>
              </button>
            )}
          </>
        ) : (
          <img
            src={media || thumbnail || blog01}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = thumbnail || blog01
            }}
          />
        )}
        <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
          {mediaType === "video" ? "Video" : "Article"}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-3 text-gray-800 transition-colors duration-300 group-hover:text-yellow-600 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">{excerpt}</p>
        <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
          <div className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
            <User size={16} className="text-yellow-600" />
            <span>By {author}</span>
          </div>
          <div className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
            <Clock size={16} className="text-yellow-600" />
            <span>{readTime}</span>
          </div>
          <div className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
            <MessageSquare size={16} className="text-yellow-600" />
            <span>{comments}</span>
          </div>
        </div>
        <button className="inline-flex items-center text-yellow-600 hover:text-yellow-700 text-sm font-semibold transition-all duration-300 group">
          Read More
          <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>
    </div>
  )
}

const Blogs = () => {
  const blogs = [
    {
      media: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sample-video.mp4",
      mediaType: "video",
      title: "Video Blog Title Here",
      excerpt:
        "Speaker and Management Consultant from India Speaker and Management Consultant from India Speaker and Management Consultant from India's financial services...",
      author: "Pawan Verma",
      readTime: "5 Mins",
      comments: "No Comments",
      thumbnail: blog01,
    },
    {
      media: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sample-video.mp4",
      mediaType: "video",
      title: "Blog Title Here",
      excerpt:
        "Speaker and Management Consultant from India Speaker and Management Consultant from India Speaker and Management Consultant from India's financial services...",
      author: "Pawan Verma",
      readTime: "7 Mins",
      comments: "No Comments",
      thumbnail: blog01,
    },
    {
      media: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/another-sample-video.mp4",
      mediaType: "video",
      title: "Another Video Blog",
      excerpt:
        "Speaker and Management Consultant from India Speaker and Management Consultant from India Speaker and Management Consultant from India's financial services...",
      author: "Pawan Verma",
      readTime: "10 Mins",
      comments: "No Comments",
      thumbnail: blog01,
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#f5e9d1]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-0.5 w-12 bg-yellow-600 transform transition-transform duration-300 origin-left hover:scale-x-150" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative">
                Blogs by me
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </h2>
              <div className="h-0.5 w-12 bg-yellow-600 transform transition-transform duration-300 origin-right hover:scale-x-150" />
            </div>
          </div>
          <p className="text-gray-600 mt-4 text-lg">Find Dr. Verma's insightful articles and videos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              media={blog.media}
              mediaType={blog.mediaType}
              title={blog.title}
              excerpt={blog.excerpt}
              author={blog.author}
              readTime={blog.readTime}
              comments={blog.comments}
              thumbnail={blog.thumbnail}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-yellow-700 hover:shadow-lg active:scale-95">
            View More Articles
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blogs