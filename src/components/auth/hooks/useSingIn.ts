import { login } from "lib/api/auth";
import { useMutation } from "react-query";
import queryKeys from "queries/queryKeys";
interface signInParms {
  email: string;
  password: string;
}
const useSignIn = () => {
  const { mutate, isSuccess, data } = useMutation(
    [queryKeys.sigIn],
    (sigiupParams: signInParms) => login(sigiupParams),
    {
      onError: (error: PromiseError) => {
        if ("detail" in error) {
          return alert(error.detail);
        }
        throw error;
      },
    }
  );
  return { mutate, isSuccess, data };
};
export default useSignIn;
