/**
 * Layout Components
 * 
 * This module exports all layout-related components for the application.
 * Layout components handle the overall structure and arrangement of the UI.
 */

// Main layout with scroll context
export { MainLayout, useScroll } from "./MainLayout";
export type { MainLayoutProps, ScrollContextType } from "./MainLayout";

// Page structure components
export { default as PageLayout } from "./PageLayout";
export { Container } from "./Container";

// Header and footer components
export { default as Header } from "./Header";
export { default as Footer } from "./Footer";

// Hero and content components
export { default as Hero } from "./Hero";
export { default as ScrollableContent } from "./ScrollableContent";

// Form components
export { default as ContactForm } from "./ContactForm";

// Special pages
export { NotFoundPage } from "./NotFoundPage";

// Re-export all components as a default object for convenience
import { MainLayout } from "./MainLayout";
import Header from "./Header";
import ScrollableContent from "./ScrollableContent";
import Footer from "./Footer";
import PageLayout from "./PageLayout";
import Hero from "./Hero";
import ContactForm from "./ContactForm";
import { Container } from "./Container";
import { NotFoundPage } from "./NotFoundPage";

/**
 * Layout namespace for convenient imports
 * @example import Layout from "@/components/layout";
 * const { Header, Footer } = Layout;
 */
const Layout = {
  MainLayout,
  Header,
  ScrollableContent,
  Footer,
  PageLayout,
  Hero,
  ContactForm,
  Container,
  NotFoundPage
};

export default Layout;
