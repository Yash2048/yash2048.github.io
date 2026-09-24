export interface Skill {
  name: string;
  className: string;
}

export type SkillCategory = "languages" | "libraries" | "tools" | "interested";
export type Skills = Record<SkillCategory, Skill[]>;

export interface TimePoint {
  datetime: string; // "YYYY-MM"
  Date: string;     // display text, e.g. "Aug, 2024"
}

export interface Work {
  "work-place": string;
  location: string;
  "work-position": string;
  time: TimePoint[]; // [start, end]
  "work-point": string[];
}

export interface Project {
  "project-title": string;
  "project-type": string;
  "tech-stack": string;
  "project-point": string[];
}

export interface Experience {
  work: Work[];
  project: Project[];
}
