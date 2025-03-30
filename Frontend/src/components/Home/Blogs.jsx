import { Clock, MessageSquare, User, Play } from "lucide-react"
import { useState } from "react"

import blog01 from '/Hero01.jpeg'
const BlogCard = ({ media, mediaType, title, excerpt, author, readTime, comments, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  // Handle video play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <div className="relative w-full h-48">
        {mediaType === "video" ? (
          <>
            <video
                src={media || "/placeholder.mp4"}
                className="w-full h-48  object-cover"
                controls={isPlaying}
                playsInline
                poster={blog01} // Set the default poster image
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                    const parentDiv = e.target.parentNode;
                    const placeholderImg = document.createElement("img");
                    placeholderImg.src = blog01; // Fallback to blog01 image
                    placeholderImg.className = "w-full h-48 object-cover";
                    parentDiv.appendChild(placeholderImg);
                }}
/>

            {!isPlaying && (
              <button 
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-colors"
              >
                <div className="bg-white bg-opacity-80 rounded-full p-3">
                  <Play size={24} className="text-yellow-600 ml-1" />
                </div>
              </button>
            )}
          </>
        ) : (
          <img
            src={media || thumbnail || blog01}
            alt={title}
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = thumbnail || blog01
            }}
          />
        )}
      </div>
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
    <section className=" py-16 bg-gradient-to-b from-white to-[#f5e9d1]">
      <div className="container mx-auto px-4 from-white to-[#f5e9d1]">
      <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-0.5 w-12 bg-[#B8860B]" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Blogs by me
            </h2>
            <div className="h-0.5 w-12 bg-[#B8860B]" />
          </div>
          <p className="text-gray-600 mt-4">Find Dr. Verma's blogs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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