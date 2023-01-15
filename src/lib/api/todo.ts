import { requestAPi } from "./requestInstance";

export const getTodos = async () => {
  const url = "/todos";
  const response = await requestAPi.get<
    TodoDetail[],
    PromiseFunc<TodoDetail[]>
  >(url);

  return response;
};

export const getTodoById = async (id: string) => {
  const url = "/todos/" + id;
  const response = await requestAPi.get(url);
  return response;
};

export const createTodo = async ({ title, content }: TodoParams) => {
  const url = "/todos";

  const response = await requestAPi.post(url, {
    title,
    content,
  });
  return response;
};
export const updateTodo = async ({ title, content, id }: TodoParams) => {
  const url = "/todos/" + id;

  const response = await requestAPi.put(url, {
    title,
    content,
  });

  return response;
};
export const deleteTodo = async (id: string) => {
  const url = "/todos/" + id;

  const response = await requestAPi.delete(url);
  return response;
};
