import { useMutation, useQueryClient } from "react-query";
import queryKeys from "queries/queryKeys";
import { deleteTodo } from "lib/api/todo";
import { useNavigate } from "react-router-dom";

function useDeleteTodo() {
  const queryClinet = useQueryClient();
  const navigate = useNavigate();
  const { data, isSuccess, error, mutate } = useMutation(
    [queryKeys.deleteTodo],
    (id: string) => deleteTodo(id),
    {
      onError: (error: PromiseError) => {
        if ("detail" in error) {
          return alert(error.detail);
        }
        throw error;
      },
      onSuccess: () => {
        queryClinet.invalidateQueries([queryKeys.getTodos]);
        navigate("/", { replace: true });
      },
    }
  );

  return { data: data?.data, isSuccess, error, mutate };
}
export default useDeleteTodo;
