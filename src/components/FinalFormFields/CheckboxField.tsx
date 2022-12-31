import { Checkbox } from "src/components/inputs";
import React from "react";
import { Field } from "react-final-form";

type CheckboxField = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
  label: string;
};

const CheckboxField = ({ name, label, ...rest }: CheckboxField) => (
  <Field name={name}>
    {({ input }) => <Checkbox label={label} {...input} {...rest} />}
  </Field>
);

export default CheckboxField;
