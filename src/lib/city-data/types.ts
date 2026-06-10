export type CitySection = {
  heading: string;
  text: string;
};

export type CityFaq = {
  question: string;
  answer: string;
};

export type CityPage = {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  services: string[];
  sections: CitySection[];
  faq?: CityFaq[];
  contactLine: string;
  directions: string;
};
