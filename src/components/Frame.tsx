import React from "react";

type FrameTypes = {
  title: string;
  description: string;
  children: JSX.Element;
};

const Frame = ({ title, description, children }: FrameTypes) => {
  return (
    <div className="bg-white flex flex-col space-y-5 px-20 pt-10 pb-7 w-11/12 h-fit md:w-full rounded-[10px] -mt-20 md:h-full md:mt-0">
      <div>
        <h1 className="text-[32px] font-bold text-[#02295a]">{title}</h1>
        <p className="text-[14px] text-[#9699ab]">{description}</p>
      </div>

      <div className="h-full">{children}</div>
    </div>
  );
};

export default Frame;
