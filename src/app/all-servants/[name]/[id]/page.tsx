"use client";

import React from "react";
import { Container } from "@/components/Container";
import { useServant } from "@/hooks/useServant";
import { HeroSection } from "@/components/Servant-Detail-Components/HeroSection";
import { StatsGrid } from "@/components/Servant-Detail-Components/StatsGrid";
import { Traits } from "@/components/Servant-Detail-Components/Traits";
import { AscensionsCostumes } from "@/components/Servant-Detail-Components/AscenscionCostumes";
import { NoblePhantasm } from "@/components/Servant-Detail-Components/NoblePhantasm";
import { Skills } from "@/components/Servant-Detail-Components/Skills";
import { useParams } from "next/navigation";

export default function ServantDetailPage() {
  const params = useParams<{ name: string; id: string }>();

  const { data, isLoading, error } = useServant.useGet();

  if (isLoading) return <Container>Loading...</Container>;

  if (error) {
    return (
      <Container>
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
          <p className="font-bold">Error</p>
          <p>{(error as Error).message}</p>
        </div>
      </Container>
    );
  }

  const servantId = Number(params.id);
  const servant = data?.find((s) => s.id === servantId);

  if (!servant) {
    return (
      <Container>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
          <p className="font-bold">Servant Not Found</p>
          <p>Servant not found.</p>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <HeroSection servant={servant} />
      <StatsGrid servant={servant} />
      <Traits
        traits={servant.traits?.map((t: { name: string }) => t.name) || []}
      />
      <AscensionsCostumes
        ascensions={servant.extraAssets?.charaGraph?.ascension || {}}
        costumes={servant.extraAssets?.charaGraph?.costume || {}}
      />
      <NoblePhantasm noblePhantasms={servant.noblePhantasms || []} />
      <Skills
        activeSkills={servant.skills || []}
        classSkills={servant.classPassive || []}
      />
    </Container>
  );
}
