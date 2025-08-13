import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export const Footer = () => {
  return (
    <footer className="bg-custom-midnight-blue/95 backdrop-blur-md border-t border-custom-gold-accent/40 text-custom-ivory-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-custom-gold-accent/10 mix-blend-screen blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-custom-amethyst-purple/10 mix-blend-screen blur-xl"></div>
      </div>

      {/* Animated border effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-custom-crimson-red via-custom-gold-accent to-custom-amethyst-purple animate-pulse"></div>

      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 mx-auto lg:grid-cols-5 relative z-10">
          {/* Logo + Desc */}
          <div className="lg:col-span-3">
            <Link
              href="/"
              className="flex items-center space-x-3 transform transition-all duration-500 hover:scale-105 hover:drop-shadow-glow"
            >
              <Image
                src="/img/fgo-logo.webp"
                alt="FGO Logo"
                width={160}
                height={45}
                className="transition-all duration-300 hover:brightness-110"
                unoptimized
              />
            </Link>
            <p className="max-w-xl mt-6 text-sm text-custom-ivory-white/80 leading-relaxed">
              FGO Fanmade adalah proyek komunitas untuk berbagi panduan, cerita,
              dan informasi seputar dunia Fate/Grand Order.
            </p>

            {/* Animated signature line */}
            <div className="mt-8 flex items-center">
              <div className="w-16 h-px bg-gradient-to-r from-custom-gold-accent to-transparent mr-3"></div>
              <span className="text-xs font-light tracking-widest text-custom-gold-accent/80">
                MADE WITH PASSION
              </span>
            </div>
          </div>

          {/* Decorative right side */}
          <div className="lg:col-span-2 flex items-end justify-end">
            <div className="text-right">
              <div className="text-xs uppercase tracking-widest text-custom-gold-accent/60 mb-2">
                Join Our Community
              </div>
              <div className="text-2xl font-light italic text-custom-ivory-white/70">
                Master of Chaldea
              </div>
              <div className="mt-6">
                <div className="inline-block px-4 py-2 border border-custom-gold-accent/30 rounded-full text-sm text-custom-gold-accent/80 hover:bg-custom-gold-accent/10 hover:text-custom-gold-accent transition-all duration-300 cursor-not-allowed">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright with animated border */}
        <div className="py-6 mt-6 border-t border-custom-gold-accent/10 relative">
          <div className="max-w-screen-xl mx-auto flex flex-col items-center">
            <div className="text-xs text-center text-custom-ivory-white/50 mb-2">
              © {new Date().getFullYear()} FGO Fanmade. All rights reserved.
            </div>
            <div className="text-[10px] tracking-widest text-custom-gold-accent/30">
              FATE/GRAND ORDER © TYPE-MOON
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
