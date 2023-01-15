import { errorMsg } from "lib/constants/api-error";
import { getStorage } from "../utils/storageUtil";

const BASE_URL = "http://localhost:8080";

export const getTodos = async () => {
  const url = BASE_URL + "/todos";

  const token = getStorage("token");
  if (!token) {
    throw errorMsg.authorization_Error;
  }

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  return await response.json();
};

export const getTodoById = async (id: string) => {
  const url = BASE_URL + "/todos/" + id;

  const token = getStorage("token");
  if (!token) {
    throw "authorization error";
  }

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  return await response.json();
};

export const createTodo = async ({ title, content }: TodoParams) => {
  const url = BASE_URL + "/todos";
  const params = JSON.stringify({
    title,
    content,
  });
  const token = getStorage("token");
  if (!token) {
    throw "authorization error";
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: params,
  });

  const result = await response.json();
  return result;
};
export const updateTodo = async ({ title, content, id }: TodoParams) => {
  const url = BASE_URL + "/todos/" + id;
  const params = JSON.stringify({
    title,
    content,
  });

  const token = getStorage("token");
  if (!token) {
    throw "authorization error";
  }
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: params,
  });

  const result = await response.json();
  return result;
};
export const deleteTodo = async (id: string) => {
  const url = BASE_URL + "/todos/" + id;

  const token = getStorage("token");
  if (!token) {
    throw "authorization error";
  }
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  const result = await response.json();
  return result;
};
