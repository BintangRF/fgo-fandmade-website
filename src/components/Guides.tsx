"use client";

import { useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { Container } from "./Container";
import { FilledButton } from "./Button";

type GuideItem = {
  title: string;
  description: string;
  image: string;
  link: string;
};

type GuideCategory = {
  [key: string]: GuideItem[];
};

export const Guides = () => {
  const [activeTab, setActiveTab] = useState<string>("beginners");

  const guides: GuideCategory = {
    beginners: [
      {
        title: "Panduan Pemula FGO",
        description:
          "Pelajari dasar-dasar permainan, sistem gacha, dan cara membangun tim pertama Anda.",
        image: "/img/starter-guide.jpeg",
        link: "/guides/beginner",
      },
      {
        title: "Memahami Class Servant",
        description:
          "Ketahui kelebihan dan kelemahan setiap class untuk strategi yang lebih efektif.",
        image: "/img/class-guide.webp",
        link: "/guides/class",
      },
    ],
    advanced: [
      {
        title: "Komposisi Tim Optimal",
        description:
          "Rekomendasi team composition untuk berbagai tipe quest dan event.",
        image: "/img/team-guide.png",
        link: "/guides/team",
      },
      {
        title: "Strategi Challenge Quest",
        description:
          "Teknik khusus untuk menyelesaikan quest tersulit dengan tim minimal.",
        image: "/img/challenge-guide.jpg",
        link: "/guides/challenge",
      },
    ],
    events: [
      {
        title: "Event Terkini",
        description:
          "Panduan lengkap event bulan ini termasuk farming spot terbaik.",
        image: "/img/event-guide.avif",
        link: "/guides/event",
      },
      {
        title: "Efisiensi Farming",
        description:
          "Optimalkan AP Anda untuk mendapatkan drop maksimal dengan waktu minimal.",
        image: "/img/farming-guide.jpg",
        link: "/guides/farming",
      },
    ],
  };

  return (
    <Container
      id="guides"
      className="relative bg-custom-light-gray overflow-hidden"
    >
      {/* SVG Decoration - Top Right */}
      <div className="absolute top-0 right-0 opacity-20">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path
            d="M100 0C44.77 0 0 44.77 0 100s44.77 100 100 100 100-44.77 100-100S155.23 0 100 0zm0 180c-44.18 0-80-35.82-80-80S55.82 20 100 20s80 35.82 80 80-35.82 80-80 80z"
            fill="#D4AF37"
          />
          <path
            d="M100 40c-33.14 0-60 26.86-60 60s26.86 60 60 60 60-26.86 60-60-26.86-60-60-60zm0 100c-22.09 0-40-17.91-40-40s17.91-40 40-40 40 17.91 40 40-17.91 40-40 40z"
            fill="#D4AF37"
          />
        </svg>
      </div>

      {/* SVG Decoration - Bottom Left */}
      <div className="absolute bottom-0 left-0 opacity-10">
        <svg width="250" height="250" viewBox="0 0 250 250" fill="none">
          <path
            d="M125 0C55.96 0 0 55.96 0 125s55.96 125 125 125 125-55.96 125-125S194.04 0 125 0zm0 225C66.45 225 20 178.55 20 120S66.45 15 125 15s105 45.45 105 104-45.45 106-105 106z"
            fill="#6A5ACD"
          />
        </svg>
      </div>

      <SectionTitle
        preTitle="Fate/Grand Order Guides"
        title="Master Your Chaldea Journey"
      >
        Kumpulan panduan lengkap untuk membantu Master memahami mekanik
        permainan, membangun tim terbaik, dan menyelesaikan berbagai quest
        dengan efisien.
      </SectionTitle>

      {/* Tab Navigation with SVG Icons */}
      <div className="flex justify-center mb-8 relative z-10">
        <div className="flex space-x-1 bg-custom-midnight-blue/90 p-1 rounded-lg border border-custom-gold-accent/30">
          {Object.entries({
            beginners: (
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5a1 1 0 011-1v3a1 1 0 01-1-2zm0-3a1 1 0 011-1v1a1 1 0 01-1 0z" />
              </svg>
            ),
            advanced: (
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-2-5a1 1 0 011-1h2a1 1 0 010 2H9a1 1 0 01-1-1zm1-4a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
            ),
            events: (
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm1-8a1 1 0 01-2 0V7a1 1 0 012 0v1zm0 3a1 1 0 01-2 0v-1a1 1 0 012 0v1z" />
              </svg>
            ),
          }).map(([tab, icon]) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center px-4 py-2 rounded-md transition-all duration-300
          ${
            activeTab === tab
              ? "bg-gradient-to-r from-custom-amethyst-purple to-custom-gold-accent text-custom-ivory-white text-shadow-xs text-shadow-custom-royal-blue font-bold shadow-sm"
              : "text-custom-light-gray hover:bg-custom-amethyst-purple/50 hover:backdrop-blur-md"
          }`}
            >
              {icon}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Guide Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {guides[activeTab].map((guide, index) => (
          <GuideCard key={index} {...guide} />
        ))}
      </div>

      {/* View All Button with Arrow Icon */}
      <div className="text-center mt-12 relative z-10">
        <FilledButton size="large">
          Lihat Semua Panduan{" "}
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </FilledButton>
      </div>
    </Container>
  );
};

const GuideCard = ({ title, description, image, link }: GuideItem) => {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-lg border-2 border-custom-gold-accent">
      {/* Layer gradient yang bisa dianimasikan */}
      <div
        className="absolute inset-0 h-[400px] w-[450px] bg-gradient-to-br from-custom-royal-blue via-custom-amethyst-purple to-custom-gold-accent
                   transition-transform duration-700 ease-out group-hover:rotate-45 group-hover:scale-200"
      />

      {/* Image */}
      <div className="relative h-48 overflow-hidden z-10">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-custom-midnight-blue/80 to-transparent transition-opacity duration-500 ease-in-out group-hover:opacity-90" />
      </div>

      {/* Text content */}
      <div className="relative p-6 z-10">
        <div className="flex items-center mb-3">
          <svg
            className="w-5 h-5 mr-2 text-custom-gold-accent transition-colors duration-500 ease-in-out group-hover:text-custom-ivory-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="text-xl font-bold text-custom-ivory-white transition-colors duration-500 ease-in-out group-hover:text-custom-gold-accent">
            {title}
          </h3>
        </div>
        <p className="text-custom-ivory-white/90 mb-5 transition-colors duration-500 ease-in-out group-hover:text-custom-ivory-white">
          {description}
        </p>
        <a
          href={link}
          className="inline-flex items-center px-4 py-2 rounded-md text-custom-ivory-white font-bold
                     bg-custom-ivory-white/30 backdrop-blur-md transition-all duration-500 ease-in-out
                     hover:bg-custom-gold-accent/80 hover:text-custom-midnight-blue hover:shadow-lg"
        >
          Baca Selengkapnya
          <svg
            className="w-4 h-4 ml-2 transition-transform duration-500 ease-in-out group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
