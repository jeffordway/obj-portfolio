import type { Metadata } from "next";
import "@/styles/globals.css";
import { MainLayout, Header, Footer } from "@/components/layout";
import { metadata as siteMetadata, primaryFont } from "@/constants";
import { ClientProviders } from "@/providers";

// Re-export the metadata for Next.js
export const metadata: Metadata = siteMetadata;

// ClientProviders is imported directly and handles dynamic imports internally

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
        <ClientProviders>
          <MainLayout showHeader showFooter>
            <Header />
            {children}
            <Footer />
          </MainLayout>
        </ClientProviders>
      </body>
    </html>
  );
}
