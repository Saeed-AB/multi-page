import React from "react";
import clsx from "clsx";
import { useForm, useFormState } from "react-final-form";

import { Footer } from "@components/Footer";
import { calculatePrice, planList } from "UiHelper";
import { SwitchField } from "@components/FinalFormFields";
import { FormStateTypes } from "types";

const SelectPlan: React.FC = () => {
  const { change } = useForm();
  const {
    values: { active_plan, is_yearly },
  } = useFormState<FormStateTypes>();

  const handleSelectPlan = (key: string) => {
    change("active_plan", key);
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-7">
        <div className="flex space-y-4 flex-col md:flex-row md:space-x-4 md:space-y-0">
          {planList.map((plan, i) => {
            const price = calculatePrice(plan.price, plan.free, is_yearly);

            return (
              <div
                onClick={() => handleSelectPlan(plan.key)}
                key={i}
                className={clsx(
                  "border-2 flex rounded-lg w-full p-5 cursor-pointer hover:shadow-md md:flex-col",
                  active_plan === plan.key
                    ? "bg-[#f8f9fe] border-[#7b77b1]"
                    : "border-[#e4e3e7] bg-white"
                )}
              >
                {plan.icon}
                <div className="ml-5 md:mt-7 md:ml-0">
                  <p className="font-bold text-[#546375] text-sm">
                    {plan.name}
                  </p>
                  <p className="text-sm font-semibold text-[#c1c2c6]">{`$${price}/${
                    is_yearly ? "yr" : "mo"
                  }`}</p>
                  {is_yearly && (
                    <p className="font-medium text-[#546375] text-xs">
                      2 months free
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#f8f9fe] rounded-md flex justify-center items-center py-2 space-x-2">
          <p
            className={clsx(
              "font-bold",
              is_yearly ? "text-[#c1c2c6]" : "text-[#546375]"
            )}
          >
            Monthly
          </p>
          <div>
            <SwitchField name="is_yearly" />
          </div>
          <p
            className={clsx(
              "font-bold",
              !is_yearly ? "text-[#c1c2c6]" : "text-[#546375]"
            )}
          >
            Yearly
          </p>
        </div>
      </div>
      <div className="absolute md:relative bottom-0 bg-white w-full left-0 p-5 md:p-0">
        <Footer />
      </div>
    </div>
  );
};

export default SelectPlan;
