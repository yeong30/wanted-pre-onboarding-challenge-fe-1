import { publicRequestAPi } from "./requestInstance";

interface authParams {
  email: string;
  password: string;
}
export const login = async ({ email, password }: authParams) => {
  const url = "/users/login";
  const result = await publicRequestAPi.post(url, {
    email,
    password,
  });
  return result;
};
export const signup = async ({ email, password }: authParams) => {
  const url = "/users/create";
  const response = await publicRequestAPi.post(url, {
    email,
    password,
  });

  return response;
};
