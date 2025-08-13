import { Hero } from "@/components/Hero";
import { Guides } from "@/components/Guides";
import { Stories } from "@/components/Stories";
import Servants from "@/components/Servants";
import Community from "@/components/Community";

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
