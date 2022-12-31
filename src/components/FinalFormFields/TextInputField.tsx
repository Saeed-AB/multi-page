/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { Field } from "react-final-form";
import { FieldValidator } from "final-form";
import { TextInput } from "src/components/inputs";

type InputTypes = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type TextInputFieldTypes = InputTypes & {
  name: string;
  label: string;
  validate?: FieldValidator<any>;
  parse?: ((value: any, name: string) => any) | undefined;
};

const TextInputField = ({
  name,
  label,
  validate,
  parse,
  ...rest
}: TextInputFieldTypes) => {
  return (
    <Field name={name} validate={validate} parse={parse}>
      {({ input, meta }) => (
        <TextInput
          label={label}
          errorMessage={meta.error && meta.touched && meta.error}
          {...input}
          {...rest}
        />
      )}
    </Field>
  );
};

export default TextInputField;
