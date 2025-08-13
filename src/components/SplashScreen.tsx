"use client";

import { useEffect, useMemo, useState } from "react";
import { useAppFlowStore } from "@/store/useAppFlowStore";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

export default function SplashScreen() {
  const setSplashDone = useAppFlowStore((s) => s.setSplashDone);
  const [show, setShow] = useState(true);

  const progress = useMotionValue(0);
  const percentage = useTransform(progress, (v) => `${Math.round(v)}%`);
  const duration = 1000; // durasi splash dalam ms

  useEffect(() => {
    animate(progress, 100, {
      duration: duration / 1000,
      ease: "easeInOut",
    });
  }, [progress, duration]);

  useEffect(() => {
    // Mulai timer untuk hide splashscreen ketika durasi selesai
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => setSplashDone(true), 500);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [setSplashDone]);

  // particles
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
    }));
  }, []);

  return (
    <div className="overflow-hidden">
      <AnimatePresence>
        {show && (
          <motion.div
            className="relative flex flex-col items-center justify-center h-screen bg-custom-midnight-blue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            {/* Partikel cahaya */}
            {particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: p.top,
                  left: p.left,
                  filter: "blur(1px)",
                }}
                animate={{
                  y: [0, -20],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: p.duration,
                  delay: p.delay,
                }}
              />
            ))}

            {/* Logo + efek */}
            <div className="relative size-1/2 not-md:size-2/3 flex items-center justify-center">
              {/* Logo */}
              <Image
                src="/img/fgo-logo.webp"
                alt="Splash Screen"
                fill
                className="object-contain z-10"
                unoptimized
                priority
              />

              {/* Lingkaran gradient berputar */}
              <motion.div
                className="size-[20vw] not-md:size-[35vw] rounded-full absolute z-0"
                style={{
                  background: "conic-gradient(#FFD700, #FFFFFF, #FFD700)",
                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 8px), black 0)",
                  mask: "radial-gradient(farthest-side, transparent calc(100% - 8px), black 0)",
                  filter: "drop-shadow(0 0 10px gold)",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 2,
                }}
              />
            </div>

            {/* Loading Bar */}
            <div className="flex flex-col justify-center items-center">
              <motion.p className="mt-2 text-custom-ivory-white text-sm z-10">
                {percentage}
              </motion.p>

              <div className="w-[50vw] h-2 bg-custom-royal-blue border-custom-light-gray border-[1px] rounded-full mt-4 overflow-hidden z-10">
                <motion.div
                  className="h-full bg-custom-gold-accent"
                  style={{ width: percentage }}
                />
              </div>
            </div>

            {/* Subtitle */}
            <motion.p
              className="mt-4 text-custom-ivory-white italic text-sm opacity-80 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              A fanmade Fate/Grand Order project
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
