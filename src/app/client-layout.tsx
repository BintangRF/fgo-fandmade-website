"use client";

import SplashScreen from "@/components/SplashScreen";
import { Cover } from "@/components/Cover";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useAppFlowStore } from "@/store/useAppFlowStore";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const splashDone = useAppFlowStore((s) => s.splashDone);
  const hasSeenCover = useAppFlowStore((s) => s.hasSeenCover);

  if (!splashDone) return <SplashScreen />;

  return (
    <>
      {!hasSeenCover && <Cover />}
      <div id="main-content" className="min-h-screen relative">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}
