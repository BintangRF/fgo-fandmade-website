"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useScrollStore } from "@/store/useScrollStore";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useAppFlowStore } from "@/store/useAppFlowStore";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollStore((state) => state.activeSection);
  const hasSeenCover = useAppFlowStore((s) => s.hasSeenCover);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Guides", href: "#guides" },
    { name: "Stories", href: "#stories" },
    { name: "Servants", href: "#servants" },
    { name: "Community", href: "#community" },
  ];

  const sectionIds = navigation.map((item) => item.href.replace("#", ""));
  useActiveSection(sectionIds);

  return (
    <nav
      className={`top-0 left-0 right-0 z-50 backdrop-blur-md bg-custom-midnight-blue/85 border-b border-custom-gold-accent/40 shadow-md transition-all
          ${hasSeenCover ? "fixed" : "absolute hidden pointer-events-none"}`}
    >
      <div className="container mx-auto flex items-center justify-between px-5 md:px-8 py-3 relative z-10">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 transform transition-transform duration-300 hover:scale-110 cursor-pointer select-none"
          aria-label="FGO Fanmade Home"
        >
          <Image
            src="/img/fgo-logo.webp"
            alt="FGO Logo"
            width={100}
            height={70}
            priority
            draggable={false}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-semibold text-custom-ivory-white tracking-wide relative">
          {navigation.map(({ name, href }) => {
            const sectionId = href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <li
                key={name}
                className="relative group cursor-pointer flex items-center"
              >
                <Link
                  href={href}
                  className={`relative z-10 py-2 px-1 transition-colors duration-300 ${
                    isActive
                      ? "text-custom-gold-accent"
                      : "hover:text-custom-gold-accent"
                  }`}
                >
                  {name}
                </Link>

                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 h-[3px] bg-custom-gold-accent rounded-full transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0 ${
                    isActive ? "w-full left-0" : ""
                  }`}
                  aria-hidden="true"
                />

                {/* Icon kecil diamond di samping menu aktif */}
                {isActive && (
                  <svg
                    className="ml-1 w-3 h-3 text-custom-gold-accent"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M5 0L10 5L5 10L0 5L5 0Z" fill="currentColor" />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>

        {/* Hamburger menu button (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className={`relative w-10 h-10 flex flex-col gap-1 justify-center items-center md:hidden focus:outline-none`}
        >
          {/* Background circle pulse when open */}
          <span
            className={`absolute w-10 h-10 rounded-full bg-custom-gold-accent transition-opacity duration-500 ${
              isOpen ? "opacity-30 animate-ping" : "opacity-0"
            }`}
          />
          {/* Hamburger lines */}
          <span
            className={`block h-1 w-7 rounded-full bg-custom-gold-accent transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block h-1 w-7 rounded-full bg-custom-gold-accent transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-1 w-7 rounded-full bg-custom-gold-accent transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-custom-midnight-blue/95 backdrop-blur-md border-t border-custom-gold-accent/40 transition-max-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-5 px-6 py-8 font-semibold text-custom-ivory-white">
          {navigation.map(({ name, href }) => {
            const sectionId = href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={name} className="flex items-center space-x-2">
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full transition-colors duration-200 ${
                    isActive
                      ? "text-custom-gold-accent"
                      : "hover:text-custom-gold-accent"
                  }`}
                >
                  {name}
                </Link>
                {isActive && (
                  <svg
                    className="w-4 h-4 text-custom-gold-accent flex-shrink-0"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M5 0L10 5L5 10L0 5L5 0Z" fill="currentColor" />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* horizontal line */}
      <hr className="border-custom-gold-accent/40 w-screen border-[1.5px] absolute bottom-1 left-0" />
    </nav>
  );
};
