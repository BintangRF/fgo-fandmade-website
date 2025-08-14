import React from "react";
import { ServantCard } from "@/components/ServantCard";

type AscensionsProps = {
  ascensions: Record<string, string>;
  costumes: Record<string, string>;
};

export const AscensionsCostumes: React.FC<AscensionsProps> = ({
  ascensions,
  costumes,
}) => {
  if (!Object.keys(ascensions).length) return null;

  return (
    <div>
      {/* Ascensions */}
      <div className="mb-8 bg-custom-ivory-white/5 p-6 rounded-xl shadow-lg border border-custom-ivory-white/10 backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-4 text-custom-ivory-white border-b border-custom-ivory-white/10 pb-2">
          Ascensions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(ascensions).map(([key, url]) => (
            <div
              key={key}
              className="group relative overflow-hidden rounded-lg border border-custom-ivory-white/10 hover:border-custom-gold-accent transition-colors"
            >
              <ServantCard id={parseInt(key)} imgSrc={url || ""} />
            </div>
          ))}
        </div>
      </div>

      {/* Costumes */}
      {Object.keys(costumes).length > 0 && (
        <div className="mb-8 bg-custom-ivory-white/5 p-6 rounded-xl shadow-lg border border-custom-ivory-white/10 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4 text-custom-ivory-white border-b border-custom-ivory-white/10 pb-2">
            Costumes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(costumes).map(([id, url]) => (
              <div
                key={id}
                className="group relative overflow-hidden rounded-lg border border-custom-ivory-white/10 hover:border-custom-gold-accent transition-colors"
              >
                <ServantCard id={parseInt(id)} imgSrc={url || ""} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
