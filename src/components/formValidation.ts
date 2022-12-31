/* eslint-disable @typescript-eslint/no-explicit-any */
export type FieldValidator = (
  value: any,
  values?: Record<string, any>
) => string | undefined;

export const required = <T>(value: T): string | undefined =>
  value ? undefined : "This field is required";

export const email = (value: string): string | undefined =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z0-9-]{2,63}$/i.test(value)
    ? "Invalid email address"
    : undefined;

export const phoneNumber = (value: string): string | undefined =>
  !/^(0|[1-9][0-9]{9})$/i.test(value) ? "Invalid email address" : undefined;

// export const composeValidators = (...validators: FieldValidator[]): FieldValidator => <T>(value: T): string | undefined =>
//   validators.reduce((error, validator) => error || validator(value), undefined);

export const composeValidators =
  (...validators: Array<FieldValidator>): FieldValidator =>
  (value: any, values?: object) =>
    validators
      .filter((v) => typeof v === "function")
      .reduce(
        (error: string | undefined, validator) =>
          error || validator(value, values),
        undefined
      );
