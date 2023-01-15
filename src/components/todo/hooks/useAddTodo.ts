import { useMutation, useQueryClient } from "react-query";
import queryKeys from "queries/queryKeys";
import { createTodo } from "lib/api/todo";

function useAddTodo() {
  const queryClinet = useQueryClient();
  const { mutateAsync, isSuccess, error } = useMutation(
    [queryKeys.createTodo],
    (todoParam: TodoParams) => createTodo(todoParam),
    {
      onError: (error: PromiseError) => {
        if ("detail" in error) {
          return alert(error.detail);
        }
      },
      onSuccess: () => {
        queryClinet.invalidateQueries([queryKeys.getTodos]);
      },
    }
  );

  return { mutateAsync, isSuccess, error };
}
export default useAddTodo;
