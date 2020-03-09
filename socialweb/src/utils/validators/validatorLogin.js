export const requiredField = value => {
  if (value) return undefined;
  return "Field is required";
};

export const maxLengthCreator = length => value => {
  if (value.length > length) return `max length is ${length} simbols`;
  return undefined;
};

export const minLengthCreator = length => value => {
  if (value.length < length) return `min length is ${length} simbols`;
  return undefined;
};
