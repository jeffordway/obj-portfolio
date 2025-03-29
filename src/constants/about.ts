// About page constants

// Header data type
export interface AboutHeaderData {
  title: string;
  bio: string;
  imageSrc: string;
  imageAlt: string;
}

// Scripture reference type
export interface ScriptureReference {
  text: string;
  url: string;
}

// Core value type
export interface CoreValue {
  title: string;
  description: string;
  scriptureRefs: ScriptureReference[];
}

// Header data
export const aboutHeaderData: AboutHeaderData = {
  title: "About Me",
  bio: "Hey, I'm Jeff Ordway. I design and code things to help you live boldly, pursue excellence, and serve purposefully. My faith keeps me grounded, my grit keeps me going, and my love for laughter keeps it all fun. When I'm not coding, you'll find me hiking trails, pushing my limits at the gym, or sharing laughs with friends over a meal or a game.",
  imageSrc: "/images/about/ordway_jeff_brandmark_alt_large.jpg",
  imageAlt: "Jeff Ordway"
};

// Core values data
export const coreValues: CoreValue[] = [
  {
    title: "Live Boldly",
    description: "Living boldly in faith, taking purposeful steps to reflect God's design and leave a legacy of impact.",
    scriptureRefs: [
      {
        text: "Joshua 1:9",
        url: "https://www.bible.com/bible/59/JOS.1.9"
      },
      {
        text: "Ephesians 6:10",
        url: "https://www.bible.com/bible/59/EPH.6.10"
      },
      {
        text: "2 Timothy 1:7",
        url: "https://www.bible.com/bible/59/2TI.1.7"
      }
    ]
  },
  {
    title: "Pursue Excellence",
    description: "Pursuing excellence with grit and grace, turning challenges into growth opportunities.",
    scriptureRefs: [
      {
        text: "Colossians 3:23",
        url: "https://www.bible.com/bible/59/COL.3.23"
      },
      {
        text: "Proverbs 22:29",
        url: "https://www.bible.com/bible/59/PRO.22.29"
      },
      {
        text: "Philippians 3:14",
        url: "https://www.bible.com/bible/59/PHP.3.14"
      }
    ]
  },
  {
    title: "Serve Purposefully",
    description: "Building authentic connections and serving others with strength and humility.",
    scriptureRefs: [
      {
        text: "Mark 10:45",
        url: "https://www.bible.com/bible/59/MRK.10.45"
      },
      {
        text: "Galatians 5:13",
        url: "https://www.bible.com/bible/59/GAL.5.13"
      },
      {
        text: "1 Peter 4:10",
        url: "https://www.bible.com/bible/59/1PE.4.10"
      }
    ]
  }
];

// Mission statement
export const missionStatement = "To inspire and equip people to live boldly, pursue excellence, and serve with purpose.";

// Vision statement
export const visionStatement = "A world where men and women enthusiastically embrace their God-given purpose, leaving a lasting legacy for future generations.";
