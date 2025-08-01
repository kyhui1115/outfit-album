import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@/_shared/style/globals.css";

import PreventSwipeBackWrapper from "@/_shared/utils/PreventSwipeBackWrapper";
import QueryProvider from "@/_shared/utils/queryProvider";
import AppContainer from "@/app/_components/container/AppContainer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "archive:",
  description: "archive",
  icons: [
    { rel: "icon", url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    { rel: "apple-touch-icon", url: "/icon-192.png" },
  ],
  manifest: "/manifest.json",
};

export const viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  shrinkToFit: "no",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} bg-beige-50 flex justify-center antialiased`}
      >
        <QueryProvider>
          <PreventSwipeBackWrapper>
            <AppContainer>{children}</AppContainer>
          </PreventSwipeBackWrapper>
        </QueryProvider>
      </body>
    </html>
  );
}
