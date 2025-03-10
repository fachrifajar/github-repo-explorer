import { getGithubUser } from "../../../utils/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";

export const GetInfiniteUsername = () => {
  const reduxData = useSelector((state: RootState) => state?.github);

  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["ghUsername", reduxData?.search?.q],
    queryFn: async ({ pageParam = 1 }) => {
      const perPage = 10;
      const res = await getGithubUser({
        q: reduxData?.search?.q,
        per_page: perPage,
        page: pageParam,
      });

      const totalCount = res?.data?.total_count ?? 0;

      const totalPages = Math.ceil(totalCount / perPage);

      return {
        data: res.data.items,
        meta: { page: pageParam, totalPages }, // metadata for pagination
      };
    },
    initialPageParam: 1,
    enabled: !!reduxData?.search?.q,
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage?.meta?.page;
      const totalPages = lastPage?.meta?.totalPages;

      if (currentPage < totalPages) {
        return currentPage + 1;
      }
      return undefined; // no more pages to fetch
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
  };
};
