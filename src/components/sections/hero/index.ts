/**
 * Hero content components for different use cases
 */

// Simple centered title/subtitle hero
export { default as SimpleHero } from "./SimpleHero";
export type { SimpleHeroProps } from "./SimpleHero";

// Profile-focused hero with image and text
export { default as ProfileHero } from "./ProfileHero";
export type { ProfileHeroProps } from "./ProfileHero";

// Animated hero with effects
export { default as AnimatedHero } from "./AnimatedHero";
export type { AnimatedHeroProps } from "./AnimatedHero";

// Hero with centered avatar
export { default as AvatarHero } from "./AvatarHero";
export type { AvatarHeroProps } from "./AvatarHero";

// Legacy export for backward compatibility
export { default as HeroContent } from "./SimpleHero";
export type { SimpleHeroProps as HeroContentProps } from "./SimpleHero";
