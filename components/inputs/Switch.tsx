import React from "react";

type SW = {
  value: boolean | undefined;
  onChange: (event: boolean) => void;
};

type SwitchTypes = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "value" | "onChange"
> &
  SW;

const Switch = ({ value, onChange, ...props }: SwitchTypes) => {
  const handleClick = () => {
    onChange?.(!value);
  };

  return (
    <div
      className="flex relative items-center cursor-pointer"
      onClick={handleClick}
    >
      <input
        type="checkbox"
        className="sr-only peer"
        checked={value}
        {...props}
      />
      <div className="w-11 h-6 bg-[#00285c] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
    </div>
  );
};

export default Switch;
