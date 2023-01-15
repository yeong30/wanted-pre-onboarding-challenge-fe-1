import { useQuery } from "react-query";
import queryKeys from "queries/queryKeys";
import { getTodoById } from "lib/api/todo";

function useTodo(id: string) {
  const { data, isSuccess, error } = useQuery(
    [queryKeys.getTodo, id],
    () => getTodoById(id),

    {
      onError: (error: PromiseError) => {
        if ("detail" in error) {
          return alert(error.detail);
        }
      },
      enabled: !!id,
    }
  );

  return { todo: data?.data.data, isSuccess, error };
}
export default useTodo;
