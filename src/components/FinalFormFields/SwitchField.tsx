import { Switch } from "src/components/inputs";
import React from "react";
import { Field, FieldInputProps, FieldRenderProps } from "react-final-form";

type InputTypes = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SwitchTypes = InputTypes & {
  name: string;
};

type Cha = {
  input: {
    onChange: (event: boolean) => void;
    value: boolean | undefined;
  };
};

type InputP = Omit<FieldRenderProps<any, HTMLElement, any>, "input"> & Cha;

const SwitchField = ({ name, ...rest }: SwitchTypes) => (
  <Field name={name}>
    {({ input }: InputP) => (
      <Switch {...rest} value={input.value} onChange={input.onChange} />
    )}
  </Field>
);

export default SwitchField;
