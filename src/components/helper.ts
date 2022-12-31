import { CurrentStepTypes } from "@/types/index";

type pageListTypes = {
  title: string;
  description: string;
  key: keyof CurrentStepTypes;
};

export const pageSteps: pageListTypes[] = [
  { title: "STEP 1", description: "YOUR INFO", key: "personaInfo" },
  { title: "STEP 2", description: "SELECT PLAN", key: "selectPlan" },
  { title: "STEP 3", description: "ADD-ONS", key: "addOns" },
  { title: "STEP 4", description: "SUMMARY", key: "summary" },
];
