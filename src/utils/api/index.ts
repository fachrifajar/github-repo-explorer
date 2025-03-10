import { masterAxios } from "./axios";
import { AxiosRequestConfig, AxiosResponse } from "axios";
// types
import { GithubUserResponse } from "../../types";

const apiRequest = async <ResponseType, DataType = unknown>(
  method: "get" | "post" | "put" | "delete",
  url: string,
  data?: DataType,
  conf?: AxiosRequestConfig
): Promise<AxiosResponse<ResponseType>> => {
  try {
    return await masterAxios[method](url, data, conf);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getGithubUser = (
  params = {}
): Promise<AxiosResponse<GithubUserResponse>> => {
  const baseURL = "/search/users";

  const searchParams = new URLSearchParams(params as Record<string, string>);

  const urlWithParams = `${baseURL}?${searchParams.toString()}`;

  return apiRequest<GithubUserResponse>("get", urlWithParams, null);
};
