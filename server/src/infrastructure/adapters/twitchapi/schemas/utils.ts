type NoUndefinedField<T> = { [P in keyof T]: NonNullable<T[P]> };

export const filterInput = <T extends Record<string, unknown>>(
  input: T
): NoUndefinedField<T> => {
  const newInput = input;
  Object.keys(input).forEach((key) => {
    const keyProp = key as keyof typeof input;
    if (typeof newInput[keyProp] === "undefined") {
      delete newInput[keyProp];
    }
  });
  return newInput as NoUndefinedField<typeof newInput>;
};
