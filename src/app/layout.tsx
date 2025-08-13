import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
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
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        > */}
        <QueryProvider>
          <ClientLayout>{children}</ClientLayout>
        </QueryProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
