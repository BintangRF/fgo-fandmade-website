import React from "react";

// Traits
type TraitsProps = {
  traits: string[];
};

export const Traits: React.FC<TraitsProps> = ({ traits }) => {
  if (!traits.length) return null;

  return (
    <div className="mb-8 bg-custom-ivory-white/5 p-6 rounded-xl shadow-lg border border-custom-ivory-white/10 backdrop-blur-sm">
      <h2 className="text-2xl font-bold mb-4 text-custom-ivory-white border-b border-white/10 pb-2">
        Traits
      </h2>
      <div className="flex flex-wrap gap-2">
        {traits.map((trait) => (
          <span
            key={trait}
            className="px-3 py-1 bg-custom-royal-blue/20 text-custom-ivory-white text-sm font-medium rounded-full"
          >
            {trait}
          </span>
        ))}
      </div>
    </div>
  );
};
