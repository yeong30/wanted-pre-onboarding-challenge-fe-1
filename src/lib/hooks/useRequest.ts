import { useState } from "react";

function useRequest() {
  const [data, setData] = useState<null | any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  const request = async (
    requestFunc: (params: any) => Promise<PromiseFunc<any>>,
    params: any
  ) => {
    try {
      setIsLoading(true);
      const result = await requestFunc(params);

      if (result.success) {
      } else {
        throw result;
      }
      setData(result.data);
    } catch (error: any) {
      setError(new Error(error.details));
      alert(error.details);
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setIsLoading(false);
    setError(null);
    setData(null);
  };

  return { request, data, isLoading, error, reset };
}
export default useRequest;
