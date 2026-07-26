 "use client";

import { useState } from "react";
import Link from "next/link";

export default function YouTubeVideosSection() {
  const videos = [
    {
      id: "1j9RAgm_S6Y",
      title:
        "Land Tokenization System से आपकी ज़मीन पर मिलेगी ज़्यादा कीमत, क्या है पूरा Idea | Paisa Live",
      description: "",
      duration: "",
    },
    {
      id: "2sWB-NroqJY",
      title: "The Tokenization of The St. Regis Aspen Resort",
      description: "",
      duration: "",
    },
    {
      id: "6cCkimumA6Y",
      title:
        "Crypto World: How Tokenization Could Shake Up The $52 Trillion U.S. Real Estate Market",
      description: "",
      duration: "",
    },
    {
      id: "SJ2A0QUY7RI",
      title: "Fractional Ownership in Real Estate - what it is and how does it work?",
      description: "",
      duration: "",
    },
    {
      id: "ag8t4hOd-2U",
      title: "Fractional Ownership Real Estate India | Concept and Advantages",
      description: "",
      duration: "",
    },
    {
      id: "QdYUdrnJvFM",
      title:
        "Tokenization of Real Estate in India: The Future of Property Investment | The Real Asset Show",
      description: "",
      duration: "",
    },
    {
      id: "wkLZ375eR4w",
      title:
        "Easiest Way To Own Real Estate Without Investing Lakhs - REITs Explained For Beginners",
      description: "",
      duration: "",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const sideVideos = videos.filter((video) => video.id !== activeVideo.id);

  return (
    <section className="py-16 bg-background border-t border-white/20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Videos
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
          {/* Featured Video - Large on the left */}
          <div className="w-full lg:w-2/3 flex items-center">
              <div className="w-full bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 group">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideo.id}`}
                    title={activeVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {activeVideo.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-3">
                  {activeVideo.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {activeVideo.description}
                </p>
              </div>
            </div>
          </div>

          {/* Side Videos - Smaller on the right */}
          <div className="w-full lg:w-1/3 space-y-4">
            {sideVideos.map((video, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setActiveVideo(video)}
                className="w-full text-left bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 group focus:outline-none"
              >
                <div className="flex sm:block lg:flex">
                  <div className="relative flex-shrink-0 w-32 sm:w-full lg:w-32">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute top-2 right-2 bg-black/70 text-white px-1 py-0.5 rounded text-xs">
                        {video.duration}
                      </div>
                    </div>
                  </div>
                  <div className="p-3 flex-1 min-w-0">
                    <h4 className="text-white text-sm font-semibold mb-1 line-clamp-2 leading-tight">
                      {video.title}
                    </h4>
                    <p className="text-gray-400 text-xs line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://www.youtube.com/@minilands_yt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent/90 text-black px-8 py-3 rounded-full font-medium transition-colors duration-300"
          >
            View All Videos
          </Link>
        </div>
      </div>
    </section>
  );
}
