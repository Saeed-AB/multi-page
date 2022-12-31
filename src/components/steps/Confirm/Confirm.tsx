import React from "react";
import { ThankYouIcon } from "src/assets/images";

const Confirm: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-5">
      <ThankYouIcon />
      <h1 className="text-3xl font-extrabold text-[#092855]">Thank you!</h1>
      <p className="text-[#b7b6bb] text-center text-sm font-medium">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Confirm;
