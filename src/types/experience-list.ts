export type EducationAndExperienceStep = "start" | "again" | "end";

export interface ExperienceListItem {
  start: string;
  end: string;
  typeOfEmployment: string;
  position: string;
  responsibilities: string[];
  workAt: string;
}
