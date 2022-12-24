import React from "react";
import clsx from "clsx";
import { useMultiStep } from "@store/ContextProvider";
import { pageSteps } from "@components/helper";

const SideBar = () => {
  const { currentStep } = useMultiStep();

  return (
    <div
      className={clsx(
        'w-full h-[160px] min-h-[160px] bg-cover bg-no-repeat bg-bottom bg-[url("../assets/images/bg-sidebar-mobile.svg")]',
        'md:w-1/2 md:h-full md:bg-[url("../assets/images/bg-sidebar-desktop.svg")] md:rounded-[10px]'
      )}
    >
      <div className="flex items-center justify-center mt-10 ml-10 space-x-4 md:space-y-6 md:space-x-0 md:flex-col md:items-start">
        {pageSteps.map((step, i) => (
          <div className="flex" key={i}>
            <div
              className={clsx(
                "rounded-full border border-zircon text-zircon w-8 h-8 flex justify-center items-center text-sm",
                (currentStep === step.key ||
                  (currentStep === "confirm" && i === 3)) &&
                  "bg-zircon text-slate-900"
              )}
            >
              {i + 1}
            </div>
            <div className="hidden ml-3 md:block">
              <p className="text-xs text-[#9fa3a8]">{step.title}</p>
              <p className="font-medium text-sm text-zircon">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
