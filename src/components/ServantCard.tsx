"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type ServantCardProps = {
  id?: number;
  name?: string;
  className?: string;
  rarity?: number;
  imgSrc: string;
  height?: string;
  width?: string;
  link?: string;
};

export function ServantCard({
  id,
  name,
  className,
  rarity,
  imgSrc,
  height = "w-full",
  width = "w-full",
  link,
}: ServantCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`relative group rounded-lg overflow-hidden shadow-md shadow-custom-midnight-blue ${height} ${width} bg-custom-midnight-blue border-2 border-custom-ivory-white ${
        link ? "cursor-pointer" : ""
      }`}
    >
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
            alt={name || ""}
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
          {[...Array(Math.min(rarity || 0, 5))].map((_, i) => (
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

      {name && (
        <div className="p-4 relative z-10">
          <h3 className="font-bold text-custom-ivory-white truncate text-shadow-2xs text-shadow-custom-light-gray">
            {name.split("/").join(" ")}
          </h3>
          <p className="text-sm text-custom-light-gray mt-1">ID: {id}</p>
        </div>
      )}
    </div>
  );
}
