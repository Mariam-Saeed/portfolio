export type Project = {
  id: string;
  title: string;
  year: number;
  company: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
};

export type Contribution = {
  id: string;
  project: string;
  description: string;
  pullRequestUrl: string;
};
