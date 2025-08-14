"use client";

import { ServantList } from "@/components/All-Servants-Components/Servant-List";
import { TabsClass } from "@/components/All-Servants-Components/Tabs-Class";
import { Container } from "@/components/Container";
import { useServant } from "@/hooks/useServant";
import React from "react";

export default function AllServants() {
  const { data = [], error } = useServant.useGet();

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container className="relative z-10 flex flex-col items-center justify-center">
      <TabsClass data={data} />
      <ServantList data={data} />
    </Container>
  );
}
