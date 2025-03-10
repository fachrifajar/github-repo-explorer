import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const masterAxios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// Interceptor to set headers before each request
masterAxios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = import.meta.env.VITE_GH_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor to handle responses and errors
masterAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    // Handle successful responses (status code 2xx)
    return response;
  },
  (error) => {
    // Handle errors (status code outside 2xx)
    throw error;
  }
);

export { masterAxios };
