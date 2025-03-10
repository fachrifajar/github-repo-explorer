import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { RepoResponse, ResponseUseMutation } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setRepos } from "../../../redux/slice/githubUserSlice";

interface FetchRepoParams {
  url: string;
}

export const GetDetailRepo = <T extends RepoResponse[]>({
  onSuccess,
  onError,
}: ResponseUseMutation<T>) => {
  const dispatch = useDispatch();
  const reduxData = useSelector((state: RootState) => state?.github);

  const queryResponseDetailRepo = useMutation({
    mutationFn: async ({ url }: FetchRepoParams): Promise<T> => {
      const existingRepo = reduxData.repos.find((repo) => repo.url === url);

      if (existingRepo) {
        return existingRepo.repos as T;
      }

      const response = await axios.get(url);
      return response?.data as T;
    },
    onSuccess: (data: T, variables: FetchRepoParams) => {
      const { url } = variables;

      dispatch(setRepos({ url, repos: data }));

      onSuccess(data);
    },
    onError: (error) => {
      onError(error);
    },
  });

  return { queryResponseDetailRepo };
};
