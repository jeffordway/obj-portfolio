import type { Metadata } from "next";
import "@/styles/globals.css";
import { metadata as siteMetadata, primaryFont } from "@/constants";
import { ClientProviders } from "@/providers";

// Re-export the metadata for Next.js
export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Next.js will automatically populate the head with metadata */}
      </head>
      <body className={`${primaryFont.variable} antialiased`}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
let