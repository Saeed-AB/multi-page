import { TextInputField } from "@components/FinalFormFields";
import { Footer } from "@components/Footer";
import { formatPhoneNumber } from "@components/formNormlize";
import { composeValidators, email, required } from "@components/formValidation";
import React from "react";
import { useField } from "react-final-form";

const PersonaInfo: React.FC = () => {
  const {
    meta: {
      invalid: personalNameInvalid,
      // dirty,
    },
  } = useField("personal_name");

  const {
    meta: {
      invalid: emailInvalid,
      // dirty,
    },
  } = useField("email_address");

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="space-y-4">
        <TextInputField
          name="personal_name"
          label="Name"
          placeholder="e.g. Stephen King"
          validate={required}
        />
        <TextInputField
          name="email_address"
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          validate={composeValidators(required, email)}
        />
        <TextInputField
          name="phone_number"
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          parse={formatPhoneNumber}
        />
      </div>

      <div className="absolute md:relative bottom-0 bg-white w-full left-0 p-5 md:p-0">
        <Footer disabled={personalNameInvalid || emailInvalid} />
      </div>
    </div>
  );
};

export default PersonaInfo;
