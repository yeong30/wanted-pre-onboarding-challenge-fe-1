import { queries } from "@testing-library/react";
import { QueryClient } from "react-query";

const queryClinet = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
});
export default queryClinet;
