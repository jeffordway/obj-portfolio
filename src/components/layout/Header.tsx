"use client";

import { clsx } from 'clsx';
import { useScroll } from './MainLayout';
import { Container } from "./Container";
import { Navbar } from "@/components/ui/navbar";

export interface HeaderProps {
  /**
   * Whether to make the header transparent over the hero
   * @default true
   */
  transparent?: boolean;
  
  /**
   * Whether to change opacity on scroll
   * @default true
   */
  dynamicOpacity?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Header layout component that handles positioning and background effects
 */
const Header = ({
  transparent = true,
  dynamicOpacity = true,
  className,
}: HeaderProps) => {
  const { scrollY } = useScroll();
  
  // Determine if header should be transparent or solid
  const isTransparent = dynamicOpacity && transparent ? scrollY <= 20 : transparent;

  return (
    <header 
      className={clsx(
        'fixed top-0 left-0 right-0',
        'z-30', // Higher z-index than hero and content
        'py-6 md:py-8',
        'transition-all duration-200 ease-in-out',

        className
      )}
      style={{ 
        backgroundColor: isTransparent ? 'transparent' : 'var(--background)',
        boxShadow: isTransparent ? 'none' : '0 2px 10px rgba(0,0,0,0.05)'
      }}
    >
      <Container>
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
