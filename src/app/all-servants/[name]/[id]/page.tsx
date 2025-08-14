"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import { useServant } from "@/hooks/useServant";
import React, { useState } from "react";
import { ServantCard } from "@/components/ServantCard";
import { deckAssets } from "@/data/deck";
import { HeroSection } from "@/components/Servant-Detail-Components/HeroSection";
import { StatsGrid } from "@/components/Servant-Detail-Components/StatsGrid";
import { Traits } from "@/components/Servant-Detail-Components/Traits";
import { AscensionsCostumes } from "@/components/Servant-Detail-Components/AscenscionCostumes";
import { NoblePhantasm } from "@/components/Servant-Detail-Components/NoblePhantasm";
import { Skills } from "@/components/Servant-Detail-Components/Skills";

export default function ServantDetailPage({
  params,
}: {
  params: { name: string; id: string };
}) {
  const { data = [], error } = useServant.useGet();

  if (error)
    return (
      <Container>
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
          <p className="font-bold">Error</p>
          <p>{(error as Error).message}</p>
        </div>
      </Container>
    );

  const servantId = parseInt(params.id, 10);
  const servant = data.find((s) => s.id === servantId);

  if (!servant) {
    return (
      <Container>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
          <p className="font-bold">Servant Not Found</p>
          <p>The servant you're looking for doesn't exist.</p>
        </div>
      </Container>
    );
  }

  const ascensions = servant.extraAssets?.charaGraph?.ascension || {};
  const costumes = servant.extraAssets?.charaGraph?.costume || {};
  const activeSkills = servant.skills || [];
  const classSkills = servant.classPassive || [];
  const noblePhantasms = servant.noblePhantasms || [];
  const traits = servant.traits?.map((t: { name: string }) => t.name) || [];

  return (
    <Container>
      <HeroSection servant={servant} />

      <StatsGrid servant={servant} />

      <Traits traits={traits} />

      <AscensionsCostumes ascensions={ascensions} costumes={costumes} />

      <NoblePhantasm noblePhantasms={noblePhantasms} />

      <Skills activeSkills={activeSkills} classSkills={classSkills} />
    </Container>
  );
}
