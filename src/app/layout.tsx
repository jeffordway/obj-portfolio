import type { Metadata } from "next";
import "@/styles/globals.css";
import { MainLayout, Header, Footer } from "@/components/layout";
import { metadata as siteMetadata, primaryFont } from "@/constants";

// Re-export the metadata for Next.js
export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primaryFont.variable} antialiased`}
      >
        <MainLayout showHeader showFooter>
          <Header />
          {children}
          <Footer />
        </MainLayout>
      </body>
    </html>
  );
}
