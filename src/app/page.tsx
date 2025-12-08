"use client";

import { Hero } from "@/components/Home-Components/Hero";
import { Guides } from "@/components/Home-Components/Guides";
import { Stories } from "@/components/Home-Components/Stories";
import { Servants } from "@/components/Home-Components/Servants";
import { Community } from "@/components/Home-Components/Community";

export default function Home() {
  return (
    <>
      <Hero />

      <Guides />

      <Stories />

      <Servants />

      <Community />
    </>
  );
}
