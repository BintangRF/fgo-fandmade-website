"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { Container } from "./Container";

export const Hero = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
      color:
        Math.random() > 0.6
          ? "bg-custom-gold-accent"
          : Math.random() > 0.3
          ? "bg-custom-ivory-white"
          : "bg-custom-crimson-red",
    }));
  }, []);

  return (
    <Container
      id="home"
      className="relative flex min-h-screen overflow-hidden flex-col md:flex-row"
    >
      {/* Background image full cover */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/img/hero.avif"
          alt="FGO Background"
          fill
          className="object-cover brightness-60"
          priority
          quality={80}
          unoptimized
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-custom-midnight-blue/70 via-custom-amethyst-purple/50 to-custom-royal-blue/60" />

      {/* Lingkaran blur multi warna */}
      <div className="absolute top-10 left-0 size-72 rounded-full bg-custom-amethyst-purple/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 size-72 rounded-full bg-custom-crimson-red/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 size-72 rounded-full bg-custom-gold-accent/30 blur-3xl pointer-events-none" />

      {/* Partikel fireflies */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className={`absolute w-1.5 h-1.5 rounded-full ${p.color}`}
          style={{
            top: p.top,
            left: p.left,
            filter: "blur(1.2px)",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}
          animate={{
            x: [0, 5, -5, 0],
            y: [0, -5, 5, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content kiri */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-xl px-8 mx-auto mt-28 md:mt-32 md:ml-16 md:mr-0 text-left"
      >
        <h1 className="font-serif text-5xl sm:text-6xl font-extrabold leading-tight tracking-wide text-custom-ivory-white drop-shadow-lg">
          Fate/Grand
          <br />
          Order
        </h1>

        <p className="mt-6 max-w-md text-lg font-medium text-custom-ivory-white/90">
          Your portal for custom guides, stories, and all things FGO.
        </p>

        <div className="mt-10 w-max flex gap-6 p-2 bg-custom-ivory-white/10 border border-custom-gold-accent/40 backdrop-blur-md rounded-lg shadow-lg">
          <motion.a
            href="/guides"
            whileHover={{ scale: 1.05 }}
            className="inline-block text-xl rounded-lg bg-custom-gold-accent px-8 py-3 font-semibold text-custom-midnight-blue shadow-md"
          >
            Guides
          </motion.a>
          <motion.a
            href="#stories"
            whileHover={{ scale: 1.05 }}
            className="text-xl inline-block rounded-lg px-8 py-3 font-semibold text-custom-gold-accent border border-custom-gold-accent/50"
          >
            Stories
          </motion.a>
        </div>
      </motion.div>

      {/* Gambar master kanan */}
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="relative mt-16 md:mt-0 w-full max-w-sm mx-auto md:absolute md:bottom-0 md:right-0 md:w-1/2 pointer-events-none select-none z-10"
      >
        <Image
          src="/img/masters.webp"
          alt="FGO Master Gudako"
          width={280}
          height={400}
          priority
          quality={100}
          className="object-contain drop-shadow-2xl"
        />
      </motion.div>
    </Container>
  );
};
