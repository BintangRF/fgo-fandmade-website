"use client";

import SplashScreen from "@/components/SplashScreen";
import { Cover } from "@/components/Cover";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useAppFlowStore } from "@/store/useAppFlowStore";
import { usePathname } from "next/navigation";
import { useServant } from "@/hooks/useServant";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const splashDone = useAppFlowStore((s) => s.splashDone);
  const hasSeenCover = useAppFlowStore((s) => s.hasSeenCover);
  const { isLoading } = useServant.useGet(); // ambil status loading

  if (!splashDone) return <SplashScreen isLoading={isLoading} />;

  console.log(pathname);

  return (
    <>
      {!hasSeenCover && <Cover />}
      <div id="main-content" className="min-h-screen relative">
        {pathname === "/" && <Navbar />}
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}
