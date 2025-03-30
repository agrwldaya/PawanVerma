import { Play } from "lucide-react";
import { useState } from "react";
import thumb01 from '/Hero01.jpeg';

const VideoCard = ({ title, views, time, duration, youtubeId, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => setIsPlaying(true);

  // Generate thumbnail if not provided
  const videoThumbnail = thumbnail || `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <div className="group">
      {isPlaying ? (
        <div className="relative w-full h-40 rounded-md mb-2 overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            className="w-full h-40 object-cover"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-md mb-2">
          <img
            src={videoThumbnail}
            alt={title}
            className="w-full h-40 object-cover transition duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/placeholder.svg?height=160&width=280";
            }}
          />
          <div 
            className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer"
            onClick={playVideo}
          >
            <div className="bg-red-600 rounded-full p-2">
              <Play className="text-white" size={24} />
            </div>
          </div>
          <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-1 rounded">{duration}</div>
        </div>
      )}
      <h3 className="font-medium text-sm mb-1 line-clamp-2">{title}</h3>
      <p className="text-gray-600 text-xs">
        {views} views • {time} ago
      </p>
    </div>
  );
};

const Videos = () => {
  const videos = [
    {
      thumbnail: thumb01,
      title: "The 10X Leader",
      views: "1.4K",
      time: "3 months",
      duration: "14:32",
      youtubeId: "IMr5o23lekQ",
    },
    {
      title: "Read This Gripping Crime Thriller - UNBORN",
      views: "6K",
      time: "2 years",
      duration: "5:45",
      youtubeId: "zddpPGLsedw",
    },
    {
      title: "India Authors Award 2021",
      views: "10K",
      time: "3 years",
      duration: "1:28",
      youtubeId: "xNhHIi6WXlA",
    },
    {
      title: "BEFORE YOU OVERTHINK, WATCH THIS",
      views: "21K",
      time: "2 years",
      duration: "4:19",
      youtubeId: "42LrSyYOwHU",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <hr />
      <div className="container mx-auto mt-5 px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold inline-block relative">
            Dr. Verma Talks
           <hr />
            <span className="ml-2 text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;