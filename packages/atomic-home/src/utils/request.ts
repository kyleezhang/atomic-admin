import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter();

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 5000,
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers.AuthorizationToken = "mytoken";
    return config;
  },
  err => Promise.reject(err)
);

service.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.data.code === 2000) {
      ElMessage.warning("登录信息已过期，请尽快重新登录！");
      router.push("/login");
    }
    return res.data;
  },
  err => {
    if (!err.response) {
      ElMessage.error("服务异常，请稍后重试");
      return Promise.reject(err);
    }
    const {
      data: { message },
    } = err.response;
    ElMessage.error(message);
    return Promise.reject(err);
  }
);

export default service;
