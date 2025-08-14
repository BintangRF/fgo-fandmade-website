"use client";

import React, { useState } from "react";
import { Container } from "../Container";
import { FilledButton } from "../Button";
import { SkeletonCard } from "../Skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";
import { SectionTitle } from "../SectionTitle";
import { useServant } from "@/hooks/useServant";
import { ServantCard } from "../ServantCard";

export const Servants = () => {
  const router = useRouter();
  const [batch] = useState(20);

  const { data = [], error } = useServant.useGet();

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

      {error ? (
        <div className="text-center py-12 text-custom-crimson-red">
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
              pagination={{
                clickable: true,
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="px-2 py-4 [&_.swiper-button-next]:right-0 [&_.swiper-button-prev]:left-0"
              navigation
              loop
            >
              {visibleData.map((servant) => (
                <SwiperSlide key={servant.id} className="pb-10">
                  <ServantCard
                    id={servant.id}
                    name={servant.name}
                    className={servant.className}
                    rarity={servant.rarity}
                    imgSrc={servant.extraAssets.charaGraph.ascension[1] || ""}
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
};
