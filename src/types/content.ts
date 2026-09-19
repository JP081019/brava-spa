export type Experience = {
  number: string;
  title: string;
  description: string;
  icon: string;
  highlights?: string[];
  options?: Array<{
    name: string;
    description: string;
    includes: string[];
  }>;
};

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};
