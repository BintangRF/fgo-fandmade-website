import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryProvider from "@/lib/query-provider";
import ClientLayout from "./client-layout";

import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fate/ Grand Order: Fanmade",
  description: "Fandmade website for FGO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <link rel="icon" href="/img/icon.png" sizes="any" />
        <QueryProvider>
          <ClientLayout>{children}</ClientLayout>
        </QueryProvider>
      </body>
    </html>
  );
}
