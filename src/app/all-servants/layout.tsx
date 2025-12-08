"use client";

import React from "react";
import { SecondNavbar } from "@/components/SecondNavbar";
import { BreadcrumbLink } from "@/components/BreadcrumbLink";

export default function AllServantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-custom-midnight-blue to-custom-royal-blue" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/img/pattern.jpeg')] opacity-10 mix-blend-overlay" />

      {/* Gold Accent Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/5 w-px h-full bg-custom-gold-accent/10" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-custom-gold-accent/10" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-custom-gold-accent/10" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-custom-gold-accent/10" />
        <div className="absolute top-0 left-4/5 w-px h-full bg-custom-gold-accent/10" />
      </div>

      {/* Overlay Tint */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Decorative Navbar */}
      <SecondNavbar />

      {/* Breadcrumb */}
      <BreadcrumbLink />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
