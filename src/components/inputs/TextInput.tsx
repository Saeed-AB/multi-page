import React from "react";
import clsx from "clsx";

type InputTypes = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type TextInputTypes = InputTypes & {
  label: string;
  errorMessage?: string;
};

const TextInput = ({ label, errorMessage, ...rest }: TextInputTypes) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <label className="block mb-2 text-sm font-normal text-black">
          {label}
        </label>
        {errorMessage && (
          <label className="block mb-2 text-sm font-extrabold text-red-600">
            {errorMessage}
          </label>
        )}
      </div>
      <input
        type="text"
        className={clsx(
          "bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",
          "focus:ring-blue-500 focus:border-blue-500",
          errorMessage && "border-red-600"
        )}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
