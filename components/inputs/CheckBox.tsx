import React from "react";

type InputTypes = Omit<React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>, 'value'>;

type CheckBoxTypes = InputTypes & {
  label: string;
  description?: string;
  value: boolean | undefined
};

const CheckBox = ({ label, value, description, ...rest }: CheckBoxTypes) => {
  return (
    <div className="flex gap-4 cursor-pointer">
      <input
        type="checkbox"
        className="w-[16px] cursor-pointer"
        checked={value}
        {...rest}
      />
      <div className="flex gap-0 flex-col">
        <p className="text-sm text-[#253a5f] font-bold">{label}</p>
        {description && (
          <p className="text-[#bcbcc6] text-sm font-medium">{description}</p>
        )}
      </div>
    </div>
  );
};

export default CheckBox;
