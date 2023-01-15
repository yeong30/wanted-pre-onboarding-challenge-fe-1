import { useQuery } from "react-query";
import queryKeys from "queries/queryKeys";
import { getTodos } from "lib/api/todo";

function useTodos<T>() {
  const { data, isSuccess, error } = useQuery([queryKeys.getTodos], getTodos);
  return { todos: data?.data, isSuccess, error };
}
export default useTodos;
