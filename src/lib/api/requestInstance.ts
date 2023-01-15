import axios, { AxiosResponse } from "axios";
import { getStorage } from "lib/utils/storageUtil";

class RequestApi {
  public instance;

  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:8080/",
      timeout: 3000,
    });
    this.instanceInit();
  }

  private instanceInit() {
    this.instance.interceptors.response.use(
      this._responseHandler,
      this._responseErrorHandler
    );
  }

  private _responseHandler = ({ data }: AxiosResponse<any, any>): any => {
    return Promise.resolve({ success: true, data });
  };

  private _responseErrorHandler = (error: any) => {
    if (error.status >= 500) {
      return Promise.reject({
        success: false,
        detail: `요청에 실패하였습니다. ${error.status}`,
      });
    }
    return Promise.reject({
      success: false,
      detail: error?.response?.data?.details || "요청에 실패하였습니다.",
    });
  };
}
const publicRequestAPi = new RequestApi().instance;

const requestAPi = new RequestApi().instance;
requestAPi.interceptors.request.use((config) => {
  const token = getStorage("token");

  if (!token) {
    throw { success: false, detail: "로그인이 필요한 서비스입니다." };
  }

  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
});

export { publicRequestAPi, requestAPi };
