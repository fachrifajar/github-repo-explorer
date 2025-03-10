// mui components
import { Typography, InputAdornment, Alert } from "@mui/material";
// custom components
import { SearchIcon } from "../../../utils/icons";
import { InputField } from "../../../components/InputField";
import { Button } from "../../../components/Button";
// custom hooks
import { useSearchForm } from "../hooks/useSearchForm";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export const SearchForm = () => {
  const {
    isFetching,
    isFetchingNextPage,
    handleChangeSearch,
    handleSearchKeyPress,
    handleSearchClick,
    error,
  } = useSearchForm();

  const reduxData = useSelector((state: RootState) => state?.github);

  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 800,
          fontSize: { xs: "2.5rem", sm: "3.5rem" },
          backgroundClip: "text",
          lineHeight: 1.2,
          color: "custom.contrastText",
          textAlign: { xs: "center", sm: "start" },
          mb: 2,
        }}
      >
        Search Github Username
      </Typography>

      <InputField
        value={reduxData?.search?.value}
        onKeyDown={handleSearchKeyPress}
        onChange={handleChangeSearch}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        loading={isFetching}
      />

      {error && (
        <Alert severity="error" sx={{ mt: 1 }}>
          {error?.response?.data?.message ||
            error.message ||
            "An unexpected error occurred. Please try again."}
        </Alert>
      )}

      <Button
        label="Search"
        sx={{ mt: 2, minWidth: "100px" }}
        disabled={reduxData?.search?.value?.trim() ? false : true}
        tooltipText="Please enter an username before searching"
        onClick={handleSearchClick}
        loading={isFetching && !isFetchingNextPage}
      />
    </>
  );
};
