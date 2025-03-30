/**
 * Layout component exports
 */

// Main layout with scroll context
export { MainLayout, useScroll } from "./MainLayout";
export type { MainLayoutProps, ScrollContextType } from "./MainLayout";

// Layout components
export { default as Header } from "./Header";
export { default as ScrollableContent } from "./ScrollableContent";
export { NotFoundPage } from "./NotFoundPage";
export { default as Footer } from "./Footer";
export { default as PageLayout } from "./PageLayout";
export { default as Hero } from "./Hero";
export { default as ContactForm } from "./ContactForm";
export { Container } from "./Container";

// Re-export all components as a default object for convenience
import { MainLayout } from "./MainLayout";
import Header from "./Header";
import ScrollableContent from "./ScrollableContent";
import Footer from "./Footer";
import PageLayout from "./PageLayout";
import Hero from "./Hero";
import ContactForm from "./ContactForm";
import { Container } from "./Container";

const Layout = {
  MainLayout,
  Header,
  ScrollableContent,
  Footer,
  PageLayout,
  Hero,
  ContactForm,
  Container
};

export default Layout;
