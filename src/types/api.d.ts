interface PromiseFunc<T> {
  success: boolean;
  data: T;
  details?: string;
}

interface PromiseError {
  success: boolean;
  detail: string;
}

interface TodoParams {
  title: string;
  content: string;
  id?: string;
}
interface TodoDetail {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}
