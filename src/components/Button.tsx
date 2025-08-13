import React from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
};

export function OutlineButton({
  children,
  onClick,
  disabled = false,
  size = "medium",
}: ButtonProps) {
  return (
    <motion.button
      disabled={disabled}
      whileHover={{
        scale: 1.07,
        boxShadow: "0 0 12px 2px rgba(123, 104, 238, 0.8)", // glow ungu
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`relative overflow-hidden border-custom-royal-blue border-2 text-custom-ivory-white px-5 py-2 rounded-full bg-custom-ivory-white/10 backdrop-blur-xs cursor-pointer select-none font-semibold text-shadow-sm text-shadow-custom-amethyst-purple ${
        size === "small"
          ? "text-xs"
          : size === "medium"
          ? "text-sm"
          : size === "large"
          ? "text-lg"
          : ""
      }`}
    >
      {/* Gradient animated overlay */}
      <motion.span
        className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-custom-crimson-red via-custom-amethyst-purple to-custom-gold-accent opacity-100 blur-lg"
        animate={{
          x: ["0%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
        style={{ pointerEvents: "none" }}
      />
      {/* Inner shadow effect */}
      <span className="relative z-10 flex justify-center items-center">
        {children}
      </span>
    </motion.button>
  );
}

export function FilledButton({
  children,
  onClick,
  disabled = false,
  size = "medium",
}: ButtonProps) {
  return (
    <motion.button
      disabled={disabled}
      whileHover={{
        scale: 1.07,
        boxShadow: "0 0 18px 4px rgba(255, 215, 0, 0.8)", // glow emas
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`relative overflow-hidden border-2 border-custom-gold-accent text-custom-ivory-white px-5 py-2 rounded-full cursor-pointer select-none font-semibold text-shadow-sm ${
        size === "small"
          ? "text-xs"
          : size === "medium"
          ? "text-sm"
          : size === "large"
          ? "text-lg"
          : ""
      } bg-gradient-to-r from-custom-crimson-red via-custom-amethyst-purple to-custom-gold-accent`}
    >
      {/* Animated highlight overlay */}
      <motion.span
        className="absolute top-0 left-[-50%] w-[200%] h-full bg-white/20 blur-lg"
        animate={{
          x: ["0%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
        style={{ pointerEvents: "none" }}
      />
      {/* Text layer */}
      <span className="relative z-10 flex justify-center items-center">
        {children}
      </span>
    </motion.button>
  );
}
