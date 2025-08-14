import React from "react";

type StatsGridProps = {
  servant: any;
};

export const StatsGrid: React.FC<StatsGridProps> = ({ servant }) => (
  <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Base Stats */}
    <div className="bg-custom-ivory-white/5 p-6 rounded-xl shadow-lg border border-custom-ivory-white/10 backdrop-blur-sm">
      <h3 className="font-bold text-lg mb-4 text-custom-ivory-white text-center">
        Base Stats
      </h3>
      <div className="flex justify-between items-center mb-2">
        <span className="text-custom-light-gray">ATK</span>
        <span className="font-bold text-custom-ivory-white">
          {servant.atkBase}
        </span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-custom-light-gray">HP</span>
        <span className="font-bold text-custom-ivory-white">
          {servant.hpBase}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-custom-light-gray">Max Level</span>
        <span className="font-bold text-custom-ivory-white">
          {servant.lvMax}
        </span>
      </div>
    </div>

    {/* Battle Stats */}
    <div className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10 backdrop-blur-sm">
      <h3 className="font-bold text-lg mb-4 text-custom-ivory-white text-center">
        Battle Stats
      </h3>
      <div className="flex justify-between items-center mb-2">
        <span className="text-custom-light-gray">Star Absorb</span>
        <span className="font-bold text-custom-ivory-white">
          {servant.starAbsorb}
        </span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-custom-light-gray">Star Gen</span>
        <span className="font-bold text-custom-ivory-white">
          {servant.starGen}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-custom-light-gray">Death Rate</span>
        <span className="font-bold text-custom-ivory-white">
          {servant.instantDeathChance}%
        </span>
      </div>
    </div>
  </div>
);
