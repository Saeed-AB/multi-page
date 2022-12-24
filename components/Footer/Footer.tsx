import React from "react";
import { useMultiStep } from "@store/ContextProvider";
import clsx from "clsx";
import { pageSteps } from "@components/helper";

const Footer = ({ disabled }: { disabled?: boolean }) => {
  const { currentStep, handleStep } = useMultiStep();
  const currentStepIndex = pageSteps.findIndex(
    (step) => step.key === currentStep
  );
  const onClickBack = () => {
    const prevStep = pageSteps[currentStepIndex - 1].key;

    handleStep(prevStep);
  };

  const onClickNext = () => {
    if (currentStep === "summary") {
      handleStep('confirm');
    } else {
      const nextStep = pageSteps[currentStepIndex + 1].key;
      handleStep(nextStep);
    }
  };

  return (
    <div className={clsx("flex justify-between")}>
      {currentStep !== "personaInfo" && (
        <button
          onClick={onClickBack}
          className="px-5 py-2 text-slate-500 font-medium rounded-md hover:bg-slate-200"
        >
          Go Back
        </button>
      )}
      <button
        onClick={onClickNext}
        className="bg-[#00285c] ml-auto px-5 py-2 text-white rounded-md hover:bg-[#00285ca3] disabled:bg-[#8ea3bea3]"
        disabled={disabled}
        type="button"
      >
        {currentStep === "summary" ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};

export default Footer;
