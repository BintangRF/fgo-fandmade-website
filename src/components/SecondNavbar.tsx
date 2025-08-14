"use client";

import React from "react";
import Image from "next/image";

export const SecondNavbar = () => {
  return (
    <div>
      {/* Decorative Navbar */}
      <header className="relative z-10 px-8 py-4 border-b border-custom-gold-accent/30 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          {/* Logo or Icon */}
          <div className="flex items-center gap-3">
            <Image
              src="/img/fgo-logo.webp"
              alt="FGO Logo"
              width={120}
              height={70}
              priority
              draggable={false}
            />
          </div>

          {/* Cosmetic Gold Line */}
          <div className="hidden md:block w-1/3 h-[2px] bg-gradient-to-r from-transparent via-custom-gold-accent/60 to-transparent" />
        </div>
      </header>
    </div>
  );
};
