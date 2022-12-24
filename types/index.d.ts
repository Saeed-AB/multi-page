import { UseFormStateParams } from "react-final-form";

export type TitlesTypes = {
  title: string;
  description: string;
};

export type CurrentStepTypes = {
  personaInfo: TitlesTypes;
  selectPlan: TitlesTypes;
  addOns: TitlesTypes;
  summary: TitlesTypes;
  confirm: TitlesTypes;
};

type Plans = "pro" | "advanced" | "arcade";

export type FormStateTypes = {
  active_plan: Plans;
  is_yearly: boolean;
  selectedOnes: string[];
};

