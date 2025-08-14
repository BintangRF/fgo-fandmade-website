"use client";
import React, { useState } from "react";
import { ServantCard } from "@/components/ServantCard";
import { deckAssets } from "@/data/deck";
import Image from "next/image";
import { goldIcon } from "@/data/class-icon";

type HeroSectionProps = {
  servant: any;
};

export const HeroSection: React.FC<HeroSectionProps> = ({ servant }) => {
  const ascensions = servant.extraAssets?.charaGraph?.ascension || {};

  const ascensionKeys = Object.keys(ascensions);

  const initialAscension =
    ascensionKeys.length > 0 ? parseInt(ascensionKeys[0]) : 0;

  const [chosenAscension, setChosenAscension] = useState(initialAscension);

  const deckImage =
    servant.extraAssets.commands.ascension?.[chosenAscension] ||
    servant.extraAssets.commands.ascension?.[3];

  const renderStars = (rarity: number) =>
    Array(rarity)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-custom-gold-accent"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            style={{
              filter: "drop-shadow(0 1px 1px var(--color-custom-gold-accent))",
            }}
          />
        </svg>
      ));

  const handleAscensionChange = (ascensionsId: number) => {
    setChosenAscension(ascensionsId);
  };

  const excludedIds = [38, 22, 9001, 9002, 9003, 9004];

  const classIcon = excludedIds.includes(servant.classId)
    ? goldIcon(20)
    : goldIcon(servant.classId);

  return (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Column: Servant Image & Ascensions */}
      <div className="col-span-1 flex flex-col gap-4">
        <ServantCard imgSrc={ascensions[chosenAscension] || ascensions[0]} />

        {Object.keys(ascensions).length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
            {Object.entries(ascensions).map(([key]) => (
              <button
                key={key}
                onClick={() => handleAscensionChange(parseInt(key))}
                className={`rounded-lg p-2 text-sm border transition-colors font-medium ${
                  0 || parseInt(key) === chosenAscension
                    ? "bg-custom-royal-blue text-custom-ivory-white border-custom-midnight-blue"
                    : "bg-custom-light-gray text-custom-midnight-blue border-custom-light-gray"
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right Column: Info & Deck */}
      <div className="col-span-2 flex flex-col justify-between text-custom-ivory-white bg-custom-ivory-white/5 p-6 rounded-xl shadow-lg border border-custom-ivory-white/10 backdrop-blur-sm">
        <div className="text-3xl md:text-4xl font-bold mb-2 flex gap-2 items-center justify-between">
          <div className="flex gap-2 items-center">
            <Image
              src={classIcon}
              alt={servant.className}
              width={48}
              height={48}
            />
            <h1>{servant.name}</h1>
          </div>

          <div className="flex items-center gap-1">
            {renderStars(servant.rarity)}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4 text-color-custom-ivory-white">
          <div>
            <p className="text-sm opacity-80">Attribute</p>
            <p className="font-medium">{servant.attribute}</p>
          </div>
          <div>
            <p className="text-sm opacity-80">Gender</p>
            <p className="font-medium">{servant.gender}</p>
          </div>
          <div>
            <p className="text-sm opacity-80">Cost</p>
            <p className="font-medium">{servant.cost}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-custom-ivory-white/80 text-custom-midnight-blue font-bold backdrop-blur-3xl rounded text-xs">
            Illustrator: {servant.profile.illustrator}
          </span>
          <span className="px-2 py-1 bg-custom-ivory-white/80 text-custom-midnight-blue font-bold backdrop-blur-3xl rounded text-xs">
            CV: {servant.profile.cv}
          </span>
        </div>

        {/* Deck Cards */}
        <div className="grid grid-cols-5 gap-4 mt-4">
          {servant.cards.map((card: string, index: number) => {
            type CardType = keyof typeof deckAssets;
            const type = card.toLowerCase() as CardType;
            const asset = deckAssets[type] || deckAssets.quick;

            return (
              <div
                key={index}
                className="relative w-full aspect-[2/3] rounded-md overflow-visible"
              >
                {/* Card Background */}
                <Image
                  src={asset.bg}
                  alt={`${card} card`}
                  className="absolute inset-0 object-cover"
                  fill
                  unoptimized
                />
                {/* Card Character */}
                <Image
                  src={deckImage || asset.bg}
                  alt={`${card} character`}
                  className="absolute inset-0 object-cover"
                  fill
                  unoptimized
                />
                {/* Card Icon */}
                <div className="absolute -bottom-[5.5vw] left-1/2 -translate-x-1/2 w-full aspect-[2/3]">
                  <Image
                    src={asset.icon}
                    alt={`${card} icon`}
                    className="object-contain"
                    fill
                    unoptimized
                  />
                </div>
                {/* Card Text */}
                <div className="absolute -bottom-[5.5vw] left-1/2 -translate-x-1/2 w-full aspect-[2/3]">
                  <Image
                    src={asset.text}
                    alt={`${card} text`}
                    className="object-contain"
                    fill
                    unoptimized
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
