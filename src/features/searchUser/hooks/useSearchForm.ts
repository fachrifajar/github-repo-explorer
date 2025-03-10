import { GetInfiniteUsername } from "../services/GetInfiniteUsername";
import { GetDetailRepo } from "../services/GetDetailRepo";
// redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setSearch } from "../../../redux/slice/githubUserSlice";

export const useSearchForm = () => {
  const reduxData = useSelector((state: RootState) => state?.github);

  // services
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = GetInfiniteUsername();
  const { queryResponseDetailRepo } = GetDetailRepo({
    onSuccess: () => {},
    onError: () => {},
  });

  const dispatch = useDispatch();

  // handlers
  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setSearch({
        value: event.target.value,
      })
    );
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    const searchValue = reduxData?.search?.value?.trim();
    if (e.key === "Enter" && searchValue) {
      dispatch(
        setSearch({
          q: searchValue,
        })
      );
    }
  };

  const handleSearchClick = () => {
    const searchValue = reduxData?.search?.value?.trim();
    dispatch(
      setSearch({
        q: searchValue,
      })
    );
  };

  return {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
    handleChangeSearch,
    handleSearchKeyPress,
    handleSearchClick,
    queryResponseDetailRepo,
  };
};
