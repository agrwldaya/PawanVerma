"use client";

import { useRef } from "react";
import { Clock, MessageSquare, User } from "lucide-react";
import img from "/Hero01.jpeg";

const BlogCard = ({ image, title, excerpt, author, readTime, comments }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden min-w-[280px] w-full md:w-[350px] flex-shrink-0 mx-2">
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/placeholder.svg?height=192&width=300";
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
  );
};

const Blogs = () => {
  const scrollContainerRef = useRef(null);

  const blogs = [
    {
      image: img,
      title: "Blog Title Here",
      excerpt: "Speaker and Management Consultant from India's financial services industry...",
      author: "Pawan Verma",
      readTime: "5 Mins",
      comments: "No Comments",
    },
    {
      image: img,
      title: "Another Blog Title",
      excerpt: "Exploring unique leadership insights with a practical approach...",
      author: "Pawan Verma",
      readTime: "7 Mins",
      comments: "2 Comments",
    },
    {
      image: img,
      title: "Yet Another Blog Title",
      excerpt: "Transformative ideas for professionals navigating modern challenges...",
      author: "Pawan Verma",
      readTime: "10 Mins",
      comments: "5 Comments",
    },
  ];

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
        <div className="hidden md:grid md:grid-cols-4 gap-6">
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
        <div
          ref={scrollContainerRef}
          className="flex md:hidden overflow-x-auto pb-6 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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

        <div className="text-center mt-8">
          <button className="bg-yellow-500 text-white px-8 py-2 rounded-md hover:bg-yellow-600 transition duration-300">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;