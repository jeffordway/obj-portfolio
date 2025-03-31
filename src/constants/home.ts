// Home page constants

// Hero section data type
export interface HeroData {
  title: string;
  subtitle: string;
  avatar: {
    src: string;
    alt: string;
    size: number;
    showBorder: boolean;
    borderColor: string;
  };
}

// Projects section data type
export interface ProjectsSectionData {
  title: string;
  description: string;
}

// Background media data type
export interface BackgroundData {
  mediaSrc: string;
  mediaType: "video" | "image";
  mediaOpacity: number;
  overlayColor: string;
  overlayOpacity: number;
  blurAmount: number;
}

// Home page content data type
export interface HomePageData {
  hero: HeroData;
  projects: ProjectsSectionData;
  background: BackgroundData;
}

// Home page content data
export const homePageData: HomePageData = {
  hero: {
    title: "Purpose-Driven Design and Development",
    subtitle: "Hey, I'm Jeff Ordway, a creator with a passion for purpose and a knack for turning faith into action. I build tools to help you live boldly, pursue excellence, and serve purposefully.",
    avatar: {
      src: "/images/icons/ordway_jeff_brandmark.jpeg",
      alt: "Jeff Ordway",
      size: 120,
      showBorder: true,
      borderColor: "border-primary"
    }
  },
  projects: {
    title: "Featured Projects",
    description: "Explore my latest work across web, mobile, and design projects."
  },
  background: {
    mediaSrc: "/videos/background_video.mp4",
    mediaType: "video",
    mediaOpacity: 5,
    overlayColor: "bg-background",
    overlayOpacity: 10,
    blurAmount: 8
  }
};
