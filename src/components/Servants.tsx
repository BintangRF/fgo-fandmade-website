"use client";

import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { Container } from "./Container";
import { useQuery } from "@tanstack/react-query";
import { FilledButton } from "./Button";
import { SkeletonCard } from "./Skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";
import { SectionTitle } from "./SectionTitle";
import { motion } from "framer-motion";

type ServantCardProps = {
  id: number;
  name: string;
  className?: string;
  rarity: number;
  imgSrc: string;
};

export function ServantCard({
  id,
  name,
  className,
  rarity,
  imgSrc,
}: ServantCardProps) {
  return (
    <div className="relative group rounded-lg overflow-hidden shadow-md shadow-custom-midnight-blue h-full bg-custom-midnight-blue border-2 border-custom-ivory-white">
      {/* Lingkaran sihir */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[85%] aspect-square rounded-full border border-yellow-300/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Magical gradient animated overlay */}
      <motion.div
        className="absolute inset-0 opacity-25"
        style={{
          background: `
            linear-gradient(
              120deg, 
              var(--color-custom-royal-blue), 
              var(--color-custom-crimson-red), 
              var(--color-custom-royal-blue)
            )
          `,
          backgroundSize: "300% 300%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Efek shimmer gloss */}
      <span className="absolute z-20 h-full inset-0 bg-gradient-to-r from-transparent via-custom-ivory-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

      {/* Gambar Servant */}
      <div className="relative aspect-[3/4] z-10 overflow-hidden">
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={name}
            fill
            className="object-cover relative"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}

        {/* Efek overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-custom-midnight-blue/80 to-transparent z-30" />

        {/* Class Badge */}
        {/* <div className="absolute top-0 right-0 px-2 py-1 rounded-tr-lg rounded-bl-lg text-lg font-bold bg-custom-amethyst-purple/80 text-custom-ivory-white shadow-md">
          {className}
        </div> */}

        {/* Rarity Stars */}
        <div className="absolute bottom-2 left-2 flex z-30 ">
          {[...Array(Math.min(rarity, 5))].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-custom-gold-accent"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                style={{
                  filter:
                    "drop-shadow(0 1px 1px var(--color-custom-gold-accent))",
                }}
              />
            </svg>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 relative z-10">
        <h3 className="font-bold text-custom-ivory-white truncate text-shadow-2xs text-shadow-custom-light-gray">
          {name}
        </h3>
        <p className="text-sm text-custom-light-gray mt-1">ID: {id}</p>
      </div>
    </div>
  );
}

type ServantData = {
  id: number;
  name: string;
  className: string;
  rarity: number;
  extraAssets: {
    charaGraph: {
      ascension: {
        1: string;
        2?: string;
        3?: string;
        4?: string;
      };
      costume: Record<string, string>;
    };
  };
};

async function fetchServants() {
  const { data } = await axios.get<ServantData[]>(
    "https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json"
  );
  return data.filter(
    (servant) =>
      servant.extraAssets?.charaGraph?.ascension?.[1] &&
      servant.className &&
      servant.rarity
  );
}

export default function Servants() {
  const router = useRouter();
  const [batch] = useState(20);

  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["servantData"],
    queryFn: fetchServants,
    staleTime: 1000 * 60 * 60,
  });

  // extract all unique class names
  // const allClassname = Array.from(
  //   new Set(data.map((servant) => servant.className))
  // );

  const visibleData = data.slice(0, batch);

  const handleViewAll = () => {
    router.push("/all-servants");
  };

  // const loadMore = () => {
  //   setBatch(prev => prev + 10);
  // };

  return (
    <Container
      id="servants"
      className="relative bg-gradient-to-b from-custom-amethyst-purple/40 to-custom-amethyst-purple/50 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative SVG Elements */}
      <div className="absolute -top-20 -left-20 opacity-20">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path
            d="M100 0C100 0 150 50 200 100C150 150 100 200 100 200C100 200 50 150 0 100C50 50 100 0 100 0Z"
            fill="url(#paint0_radial)"
          />
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(100 100) rotate(90) scale(100)"
            >
              <stop stopColor="#9F7AEA" />
              <stop offset="1" stopColor="#6B46C1" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute -bottom-20 -right-20 opacity-20 rotate-180">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path
            d="M100 0C100 0 150 50 200 100C150 150 100 200 100 200C100 200 50 150 0 100C50 50 100 0 100 0Z"
            fill="url(#paint1_radial)"
          />
          <defs>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(100 100) rotate(90) scale(100)"
            >
              <stop stopColor="#9F7AEA" />
              <stop offset="1" stopColor="#6B46C1" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Glowing effects */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl" />

      {/* Heroic crest decoration */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 opacity-10">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path
            d="M60 0L74.1421 14.1421L88.2843 0L102.426 14.1421L120 0V20L105.858 34.1421L120 48.2843V71.7157L105.858 85.8579L120 100V120H100L85.8579 105.858L71.7157 120H48.2843L34.1421 105.858L20 120H0V100L14.1421 85.8579L0 71.7157V48.2843L14.1421 34.1421L0 20V0H20L34.1421 14.1421L48.2843 0H60Z"
            fill="#9F7AEA"
          />
        </svg>
      </div>

      <SectionTitle
        preTitle="Fate/Grand Order Servants"
        title="Panggil Pahlawan Legendaris"
      >
        Dalam Fate/Grand Order, Servant bukan sekadar karakter—mereka adalah roh
        pahlawan, raja, dan legenda dari berbagai era yang siap berjuang demi
        sang Master. Setiap Servant memiliki kelas, kekuatan, dan gaya bertarung
        unik, membuka strategi tanpa batas untuk menaklukkan setiap misi dan
        mengubah nasib dunia.
      </SectionTitle>

      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, idx) => (
            <SkeletonCard key={idx} className="h-64 rounded-lg" />
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-12 text-red-400">
          Failed to load servant data. Please try again later.
        </div>
      ) : (
        <>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              className="px-2 py-4 [&_.swiper-button-next]:right-0 [&_.swiper-button-prev]:left-0"
            >
              {visibleData.map((servant) => (
                <SwiperSlide key={servant.id} className="pb-10">
                  <ServantCard
                    id={servant.id}
                    name={servant.name}
                    className={servant.className}
                    rarity={servant.rarity}
                    imgSrc={servant.extraAssets.charaGraph.ascension[1]}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="text-center mt-8 relative z-10">
            <FilledButton onClick={handleViewAll}>
              View All Servants
            </FilledButton>
          </div>
        </>
      )}
    </Container>
  );
}
