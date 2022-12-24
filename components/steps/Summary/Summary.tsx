import { Footer } from "@components/Footer";
import { useMultiStep } from "@store/ContextProvider";
import React from "react";
import { useFormState } from "react-final-form";
import { FormStateTypes } from "types/index.d";
import { addList, calculatePrice, planList } from "UiHelper";

const Summary: React.FC = () => {
  const { handleStep } = useMultiStep();
  const {
    values: { active_plan, is_yearly, selectedOnes },
  } = useFormState<FormStateTypes>();

  const activePlan = planList.find((item) => item.key === active_plan);
  const onesList = addList.filter((item) => selectedOnes.includes(item.name));
  const price = calculatePrice(activePlan!.price, activePlan!.free, is_yearly);

  let result = price;
  onesList.forEach((item) => {
    const itemPrice = calculatePrice(item.price, 2, is_yearly);

    result += itemPrice;
  });

  let sign = "/";
  sign += is_yearly ? "yr" : "mo";

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-4 bg-[#f8f9fe] rounded-md">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-[#1e3963] font-bold text-sm">
                {`${activePlan?.name}(${is_yearly ? "Yearly" : "Monthly"})`}
              </span>
              <span
                onClick={() => handleStep("selectPlan")}
                className="text-[#b3b3bd] text-sm font-normal underline cursor-pointer"
              >
                Change
              </span>
            </div>
            <span className="text-[#1e3963] font-bold text-sm">{`$${price}${sign}`}</span>
          </div>

          {onesList.length > 0 && (
            <div className="flex flex-col gap-4 border-t-[1px] pt-6 mt-6">
              {onesList.map((item) => {
                const itemPrice = calculatePrice(item.price, 2, is_yearly);

                return (
                  <div
                    key={item.name}
                    className="flex justify-between items-center"
                  >
                    <span className="text-[#b3b3bd] text-sm font-normal">
                      {item.label}
                    </span>
                    <span className="text-[#1e3963] font-medium text-sm">
                      {`$${itemPrice}${sign}`}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-3 p-4">
          <span className="text-[#b3b3bd] text-sm font-normal">
            {`Total (per ${is_yearly ? "Year" : "month"})`}
          </span>
          <span className="text-[#584edc] text-base font-semibold">
            {`+${result}${sign}`}
          </span>
        </div>
      </div>
      <div className="absolute md:relative bottom-0 bg-white w-full left-0 p-5 md:p-0">
        <Footer />
      </div>
    </div>
  );
};

export default Summary;
