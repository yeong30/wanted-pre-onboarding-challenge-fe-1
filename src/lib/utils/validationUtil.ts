export const emailValidtor = (value: string) => {
  return /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z0-9.]+$/.test(value);
};
export const passwordValidtor = (value: string) => {
  return /^[a-zA-Z0-9@!]{8,}$/.test(value);
};
