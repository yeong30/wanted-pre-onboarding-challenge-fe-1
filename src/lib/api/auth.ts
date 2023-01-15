const BASE_URL = "http://localhost:8080";

interface loginParams {
  email: string;
  password: string;
}
export const login = async ({ email, password }: loginParams) => {
  const url = BASE_URL + "/users/login";
  const params = JSON.stringify({
    email,
    password,
  });

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: params,
  });
  const result = await response.json();
  return result;
};
export const signup = async ({ email, password }: loginParams) => {
  const url = BASE_URL + "/users/create";
  const params = JSON.stringify({
    email,
    password,
  });
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: params,
  });

  const result = await response.json();
  return result;
};
