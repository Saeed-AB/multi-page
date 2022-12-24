import { Footer } from "@components/Footer";
import { Checkbox } from "@components/inputs";
import clsx from "clsx";
import React from "react";
import { useForm, useFormState } from "react-final-form";
import { FormStateTypes } from "types";
import { addList, calculatePrice } from "UiHelper";

const AddOns: React.FC = () => {
  const { change } = useForm();
  const {
    values: { is_yearly, selectedOnes },
  } = useFormState<FormStateTypes>();

  const handleChange = (v: string) => {
    let keys: string[] = [];
    if (selectedOnes.includes(v)) {
      keys = selectedOnes.filter((i: string) => i !== v);
    } else {
      keys = [...selectedOnes, v];
    }

    change("selectedOnes", keys);
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-3">
        {addList.map((item, i) => {
          const price = calculatePrice(item.price, 2, is_yearly);
          const isChecked = selectedOnes.includes(item.name); 

          return (
            <div
              key={i}
              className={clsx(
                "flex justify-between w-full border-2 p-4 rounded-md cursor-pointer items-center hover:bg-[#f8f9fe]",
                isChecked ? "bg-[#f8f9fe] border-[#827cb3]" : "bg-[#fff] border-[#e4e3e7]"
              )}
              onClick={() => handleChange(item?.name)}
            >
              <Checkbox
                label={item.label}
                description={item.description}
                value={isChecked}
              />
              <p className="text-[#857ddb] text-sm font-semibold">{`+$${price}/${
                !is_yearly ? "mo" : "yr"
              }`}</p>
            </div>
          );
        })}
      </div>
      <div className="absolute md:relative bottom-0 bg-white w-full left-0 p-5 md:p-0">
        <Footer />
      </div>
    </div>
  );
};

export default AddOns;
