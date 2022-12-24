import React from "react";
import { CurrentStepTypes } from "types/index.d";

type PropsTypes = {
  children: JSX.Element;
  currentStep: keyof CurrentStepTypes;
  setCurrentStep: (s: keyof CurrentStepTypes) => void;
};

type ContextTypes = {
  currentStep: string;
  handleStep: (s: keyof CurrentStepTypes) => void;
};

const initVal = {
  currentStep: "personaInfo",
  handleStep: (s: keyof CurrentStepTypes) => {},
};

const AppContext = React.createContext<ContextTypes>(initVal);

const ContextProvider = ({
  children,
  currentStep,
  setCurrentStep,
}: PropsTypes): JSX.Element => {
  const value = {
    currentStep,
    handleStep: (step: keyof CurrentStepTypes) => setCurrentStep(step),
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default ContextProvider;

export const useMultiStep = () => React.useContext(AppContext);
