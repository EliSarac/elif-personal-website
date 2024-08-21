import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Elif Saracoglu",
  NUM_POSTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Elif Saracoglu personal website",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/sareloeli/",
  },
  {
    NAME: "github",
    HREF: "https://github.com/EliSarac",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/saracoglu-elif/",
  },
];
