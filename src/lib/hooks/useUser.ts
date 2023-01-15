import { getStorage, resetStorage, setStorage } from "lib/utils/storageUtil";

const useUser = () => {
  const isLogined = () => {
    return !!getStorage("token");
  };
  const setToken = (token: string) => {
    setStorage("token", token);
  };
  const removeToken = () => {
    resetStorage("token");
  };

  return { isLogined, setToken, removeToken };
};

export default useUser;
