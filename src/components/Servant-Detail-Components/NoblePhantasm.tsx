import React from "react";

type NoblePhantasmProps = {
  noblePhantasms: Array<{
    id: string;
    name: string;
    rank: string;
    card: string;
    npDistribution: Array<string>;
    detail: string;
  }>;
};

export const NoblePhantasm: React.FC<NoblePhantasmProps> = ({
  noblePhantasms,
}) => {
  if (!noblePhantasms.length) return null;

  return (
    <div className="mb-8 bg-custom-ivory-white/5 p-6 rounded-xl shadow-lg border border-custom-ivory-white/10 backdrop-blur-sm">
      <h2 className="text-2xl font-bold mb-4 text-custom-ivory-white border-b border-custom-ivory-white/10 pb-2">
        Noble Phantasms
      </h2>
      <div className="space-y-4">
        {noblePhantasms.map((np) => (
          <div
            key={np.id}
            className="p-4 rounded-lg border border-white/10 hover:border-custom-gold-accent transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-custom-ivory-white">
                {np.name}
              </h3>
              <span className="px-2 py-1 bg-custom-gold-accent/20 text-custom-gold-accent text-sm rounded-full">
                {np.rank}
              </span>
            </div>
            <div className="flex gap-2 mb-3">
              <span className="px-2 py-1 bg-custom-amethyst-purple/20 text-custom-light-gray text-sm rounded-full">
                {np.card}
              </span>
              <span className="px-2 py-1 bg-custom-royal-blue/20 text-custom-light-gray text-sm rounded-full">
                Hits: {np.npDistribution.length}
              </span>
            </div>
            <p className="text-custom-light-gray">{np.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
