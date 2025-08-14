"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "../SectionTitle";

export const Stories = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [videoId, setVideoId] = useState<string>("o5zlCOd09kk");

  const video = [
    { id: "o5zlCOd09kk", label: "Lostbelt 1: Anastasia" },
    { id: "49l5MjMr3bk", label: "Lostbelt 2: Götterdämmerung" },
    { id: "UzRKoplu7Gc", label: "Lostbelt 3: SIN" },
    { id: "rPSlRo7BO-A", label: "Lostbelt 4: Yuga Kshetra" },
    { id: "fxqsgGmg7-Y", label: "Lostbelt 5: Atlantis" },
    { id: "Dd54YjsFW3w", label: "Lostbelt 6: Avalon le Fae" },
    { id: "ObGgS_Y-EuQ", label: "Lostbelt 7: Nahui Mictlan" },
  ];

  const handleChooseVideo = (id: string) => {
    setVideoId(id);
  };

  // Generate posisi bintang sekali saja
  const stars = useMemo(() => {
    return [...Array(10)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delayClass: i % 2 === 0 ? "animate-delay-1000" : "animate-delay-2000",
    }));
  }, []);

  return (
    <Container
      id="stories"
      className="relative overflow-hidden bg-gradient-to-b from-custom-light-gray to-custom-amethyst-purple/40"
    >
      <SectionTitle
        preTitle="Kisah Epik Chaldea"
        title="Jelajahi Cerita Heroik"
      >
        Saksikan kisah-kisah epik dari Fate/Grand Order. Setiap Lostbelt
        menawarkan petualangan unik dengan karakter yang tak terlupakan dan
        pertarungan spektakuler.
      </SectionTitle>

      {/* Video Container */}
      <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-custom-gold-accent/30 hover:border-custom-gold-accent/50 transition-all duration-300 group">
        {!playVideo && (
          <div className="relative w-full h-0 pb-[56.25%] bg-gradient-to-br from-custom-amethyst-purple/70 to-custom-crimson-red/50">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('/images/fgo-bg-pattern.png')] opacity-15"></div>
              <button
                onClick={() => setPlayVideo(true)}
                className="relative z-10 group"
                aria-label="Putar Video"
              >
                <div className="relative w-24 h-24 lg:w-32 lg:h-32">
                  <svg
                    className="absolute inset-0 w-full h-full animate-pulse-slow"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="#D4AF37"
                      strokeWidth="3"
                      strokeDasharray="5,5"
                      fill="none"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-custom-light-gray/50 rounded-full flex items-center justify-center group-hover:bg-custom-crimson-red transition-all duration-300 shadow-lg group-hover:shadow-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 lg:w-12 text-custom-midnight-blue"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-custom-ivory-white/80 font-medium text-lg">
                  Klik untuk menyaksikan kisah heroic
                </p>
              </div>
            </div>
          </div>
        )}
        {playVideo && (
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
              title="Video Kisah FGO"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        )}
      </div>

      {/* Story Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mt-8 px-4">
        {video.map((story) => (
          <button
            key={story.id}
            onClick={() => handleChooseVideo(story.id)}
            className={`relative shadow-xs shadow-custom-ivory-white/40 overflow-hidden px-4 py-2 rounded-full border-2 font-semibold select-none cursor-pointer border-custom-gold-accent text-custom-ivory-white
            ${
              videoId === story.id
                ? "bg-gradient-to-r from-custom-crimson-red via-custom-amethyst-purple to-custom-gold-accent shadow-xl shadow-custom-gold-accent"
                : "bg-custom-midnight-blue/90 hover:bg-custom-midnight-blue/80"
            }`}
          >
            {videoId === story.id && (
              <span
                className="absolute top-0 left-[-50%] w-[200%] h-full bg-white/20 blur-lg"
                style={{
                  animation: "slideHighlight 3s linear infinite alternate",
                  pointerEvents: "none",
                }}
              />
            )}
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.15),transparent_70%)] opacity-50 pointer-events-none" />
            <span className="relative z-10">{story.label}</span>
          </button>
        ))}
      </div>

      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <svg
            key={star.id}
            className={`absolute w-4 h-4 text-custom-gold-accent/50 animate-twinkle ${star.delayClass}`}
            style={{
              top: star.top,
              left: star.left,
            }}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </Container>
  );
};
