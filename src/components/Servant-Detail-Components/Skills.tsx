"use client";

import React from "react";

type Skill = {
  id: string;
  name: string;
  coolDown?: Array<number>;
  detail: string;
};

type SkillsProps = {
  activeSkills: Skill[];
  classSkills: Skill[];
};

export const Skills: React.FC<SkillsProps> = ({
  activeSkills,
  classSkills,
}) => {
  if (!activeSkills.length && !classSkills.length) return null;

  return (
    <div className="mb-8 bg-custom-ivory-white/5 p-6 rounded-xl shadow-lg border border-custom-ivory-white/10 backdrop-blur-sm">
      <h2 className="text-2xl font-bold mb-4 text-custom-ivory-white border-b border-custom-ivory-white/10 pb-2">
        Skills
      </h2>

      {activeSkills.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-3 text-custom-ivory-white">
            Active Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {activeSkills.map((skill: Skill) => (
              <div
                key={skill.id}
                className="p-4 rounded-lg border border-white/10 hover:border-custom-gold-accent transition-colors"
              >
                <h4 className="text-lg font-bold mb-1 text-custom-ivory-white">
                  {skill.name}
                </h4>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-custom-light-gray">
                    Cooldown
                  </span>
                  <span className="px-2 py-1 bg-custom-gold-accent/10 text-custom-gold-accent text-sm rounded-full">
                    {skill.coolDown?.[0]} - {skill.coolDown?.[9]} Turn
                  </span>
                </div>
                <p className="text-custom-light-gray">{skill.detail}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {classSkills.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-3 text-custom-ivory-white">
            Class Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {classSkills.map((skill: Skill) => (
              <div
                key={skill.id}
                className="p-4 rounded-lg border border-white/10 hover:border-custom-gold-accent transition-colors"
              >
                <h4 className="text-lg font-bold mb-1 text-custom-ivory-white">
                  {skill.name}
                </h4>
                <p className="text-custom-light-gray">{skill.detail}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
