import { getStorage, setStorage } from "lib/utils/storageUtil";

const useUser = () => {
  const isLogined = () => {
    return !!getStorage("token");
  };
  const setToken = (token: string) => {
    setStorage("token", token);
  };

  return { isLogined, setToken };
};

export default useUser;
