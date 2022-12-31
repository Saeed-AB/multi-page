import React from "react";
import {
  AddOns,
  Confirm,
  PersonaInfo,
  SelectPlan,
  Summary,
} from "src/components/steps";
import ContextProvider from "src/store/ContextProvider";
import { SideBar } from "src/components/SideBar";
import Frame from "src/components/Frame";
import { Form } from "react-final-form";
import { CurrentStepTypes } from "@/types/index";

type StepsTypes = {
  personaInfo: React.FC;
  selectPlan: React.FC;
  addOns: React.FC;
  summary: React.FC;
  confirm: React.FC;
};

const steps: StepsTypes = {
  personaInfo: PersonaInfo,
  selectPlan: SelectPlan,
  addOns: AddOns,
  summary: Summary,
  confirm: Confirm,
};

const titles: CurrentStepTypes = {
  personaInfo: {
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
  },
  selectPlan: {
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
  },
  addOns: {
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  },
  summary: {
    title: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
  },
  confirm: {
    title: "",
    description: "",
  },
};

const initialValues = {
  active_plan: "arcade",
  is_yearly: false,
  selectedOnes: [],
};

type CurrentTypes =
  | "personaInfo"
  | "selectPlan"
  | "addOns"
  | "summary"
  | "confirm";

export default function Home() {
  const [currentStep, setCurrentStep] =
    React.useState<CurrentTypes>("personaInfo");

  const StepComponent = steps[currentStep];
  const componentTitle = titles[currentStep];

  const onSubmit = () => {};

  return (
    <div className="w-full h-screen flex justify-center md:items-center">
      <ContextProvider
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      >
        <div className="w-full max-w-[890px] h-full max-h-[540px] bg-[rgb(240, 246, 255)] rounded-[10px] flex gap-3 flex-col items-center md:bg-white md:p-4 md:flex-row">
          {/* Side Bar */}
          <SideBar />

          <Frame
            title={componentTitle.title}
            description={componentTitle.description}
          >
            <Form onSubmit={onSubmit} initialValues={initialValues}>
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="h-full">
                  <StepComponent />
                </form>
              )}
            </Form>
          </Frame>
        </div>
      </ContextProvider>
    </div>
  );
}
