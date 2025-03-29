/**
 * Layout component exports
 */

// Main layout with scroll context
export { MainLayout, useScroll } from "./MainLayout";
export type { MainLayoutProps, ScrollContextType } from "./MainLayout";

// Layout components
export { default as Header } from "./Header";
export { default as ScrollableContent } from "./ScrollableContent";
export { default as Section } from "./Section";
export { default as Footer } from "./Footer";
export { default as PageLayout } from "./PageLayout";
export { default as Projects } from "./Projects";
export { default as Hero } from "./Hero";
export { default as Content } from "./Content";
export { default as Skills } from "./Skills";
export { default as Contact } from "./Contact";
export { Container } from "./Container";

// Re-export all components as a default object for convenience
import { MainLayout } from "./MainLayout";
import Header from "./Header";
import ScrollableContent from "./ScrollableContent";
import Section from "./Section";
import Footer from "./Footer";
import PageLayout from "./PageLayout";

const Layout = {
  MainLayout,
  Header,
 ScrollableContent,
  Section,
  Footer,
  PageLayout,
};

export default Layout;
