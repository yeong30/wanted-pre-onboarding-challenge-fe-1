import { signup } from "lib/api/auth";
import { useMutation } from "react-query";
import queryKeys from "queries/queryKeys";
interface signUpParms {
  email: string;
  password: string;
}
const useSignUp = () => {
  const { mutate, isSuccess } = useMutation(
    [queryKeys.sigUp],
    (sigiupParams: signUpParms) => signup(sigiupParams),
    {
      onError: (error: PromiseError) => {
        if ("detail" in error) {
          return alert(error.detail);
        }
        throw error;
      },
    }
  );
  return { mutate, isSuccess };
};
export default useSignUp;
