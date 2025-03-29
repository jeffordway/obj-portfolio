import { MainLayout, Header, Footer } from "@/components/layout";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayout>
      <Header />
      {children}
      <Footer />
    </MainLayout>
  );
}
