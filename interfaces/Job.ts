export interface JobLevel {
  name: string;
}

export interface JobCompany {
  id: number;
  name: string;
}

export interface Job {
  id: number;
  name: string;
  levels: JobLevel[];
  company: JobCompany;
}
