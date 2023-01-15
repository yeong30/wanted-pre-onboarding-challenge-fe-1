import { useMutation, useQueryClient } from "react-query";
import queryKeys from "queries/queryKeys";
import { updateTodo } from "lib/api/todo";

function useEditTodo() {
  const queryClinet = useQueryClient();
  const { data, isSuccess, error, mutateAsync } = useMutation(
    [queryKeys.updateTodo],
    (todoParam: TodoParams) => updateTodo(todoParam),
    {
      onError: (error: PromiseError) => {
        if ("detail" in error) {
          alert(error.detail);
        }
        throw error;
      },
      onSuccess: () => {
        queryClinet.invalidateQueries([queryKeys.getTodos]);
      },
    }
  );

  return { data: data?.data, isSuccess, error, mutateAsync };
}
export default useEditTodo;
