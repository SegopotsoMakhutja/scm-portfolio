
export type Project = {
  name: string;
  description: string;
  stack: Array<string>
}

export type WorkHistory = {
  company: string;
  date: string;
  role: string;
  companyDescription: string;
  projects: Array<Project>;
}