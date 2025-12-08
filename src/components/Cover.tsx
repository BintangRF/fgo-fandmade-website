"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import { useAppFlowStore } from "@/store/useAppFlowStore";
import { useState, useEffect } from "react";
import { OutlineButton } from "./Button";

export const Cover = () => {
  const { hasSeenCover, setHasSeenCover } = useAppFlowStore();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.body.style.overflow = hasSeenCover ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [hasSeenCover]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (hasSeenCover) return null;

  return (
    <section className="relative h-screen w-full">
      {/* Layer Belakang */}
      <Image
        src="/img/cover-behind.webp"
        alt="hero section image"
        className="object-cover"
        sizes="100vw"
        fill
        priority
        unoptimized
        quality={100}
      />

      {/* Layer Depan dengan clip-path */}
      <Image
        src="/img/cover-front.webp"
        alt="hero section image"
        className="object-cover"
        style={{
          clipPath: `circle(90px at ${mousePos.x}px ${mousePos.y}px)`,
          WebkitClipPath: `circle(90px at ${mousePos.x}px ${mousePos.y}px)`,
          transition: "clip-path 0.05s linear",
        }}
        sizes="100vw"
        fill
        unoptimized
        priority
        quality={100}
      />

      <div className="absolute inset-0 bg-custom-midnight-blue/25" />

      <Container className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Logo */}
        <h1 className="text-5xl font-serif mb-4 tracking-wide text-shadow-custom-royal-blue text-shadow-md">
          Fate/Grand Order:{" "}
          <span className="text-custom-gold-accent">Eternal Convergence</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg italic mb-6 max-w-2xl text-shadow-custom-royal-blue text-shadow-md">
          “When countless timelines collapse into one, Masters must face the
          echoes of every battle ever fought.”
        </p>

        {/* Deskripsi */}
        <p className="text-sm max-w-xl opacity-80 mb-8 text-shadow-custom-royal-blue text-shadow-md">
          A fanmade story project inspired by Fate/Grand Order. Embark on a
          journey where heroes from across history converge to save the very
          fabric of reality.
        </p>

        {/* Tombol */}
        <OutlineButton
          onClick={() => {
            const mainContent = document.getElementById("main-content");
            if (mainContent) {
              mainContent.scrollIntoView({ behavior: "smooth" });

              setTimeout(() => {
                setHasSeenCover(true);
              }, 1600);
            }
          }}
          size="large"
        >
          Read More
        </OutlineButton>
      </Container>
    </section>
  );
};
