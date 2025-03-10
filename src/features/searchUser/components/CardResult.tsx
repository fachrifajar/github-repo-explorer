import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  IconButton,
  CardContent,
  Collapse,
  Box,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSearchForm } from "../hooks/useSearchForm";
import {
  ChevronTopIcon,
  ChevronBottomIcon,
  NoDataIcon,
  StarIcon,
} from "../../../utils/icons";
import { SkeletonCard } from "./SkeletonCard";
import { useMemo } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export const CardResult = () => {
  const reduxData = useSelector((state: RootState) => state?.github);

  const {
    status,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    queryResponseDetailRepo,
  } = useSearchForm();

  const userData = useMemo(
    () => data?.pages.flatMap((page) => page.data) || [],
    [data]
  );

  // State to manage expanded cards and repository data
  const [expandedCard, setExpandedCard] = useState<Record<string, boolean>>({});

  const { ref, inView } = useInView();

  // Fetch the next page when the observer is in view
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  // Reset expanded state and reposData when userData changes
  useEffect(() => {
    setExpandedCard({});
  }, [userData]);

  const handleExpandClick = async (key: string, reposUrl: string) => {
    setExpandedCard((prev) => ({
      ...prev,
      [key]: !prev[key], // Toggle the specific card's expanded state
    }));

    await queryResponseDetailRepo?.mutateAsync({
      url: reposUrl,
    });
  };

  if (isFetching && !isFetchingNextPage) {
    return (
      <>
        {Array.from({ length: 5 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </>
    );
  }

  if (!userData?.length && !isFetching && status === "success") {
    return <NoDataIcon />;
  }

  return (
    <Box
      sx={{
        height: "50vh",
        overflowY: "auto",
        px: 2,
        mt: { xs: 5, sm: 5, md: 0 },
      }}
    >
      {userData?.map((item, key) => (
        <Card
          key={key}
          sx={{
            bgcolor: "custom.card",
            border: "1px solid",
            borderColor: "custom.border",
            my: 1,
          }}
        >
          <CardHeader
            avatar={<Avatar src={item?.avatar_url} alt={item?.login} />}
            title={
              <Typography variant="body1" fontWeight={600}>
                {item?.login}
              </Typography>
            }
            action={
              <IconButton
                onClick={() =>
                  handleExpandClick(key.toString(), item?.repos_url)
                }
              >
                {expandedCard[key] ? <ChevronTopIcon /> : <ChevronBottomIcon />}
              </IconButton>
            }
          />
          <Collapse in={!!expandedCard[key]} timeout="auto" unmountOnExit>
            <CardContent>
              {queryResponseDetailRepo?.isPending &&
              queryResponseDetailRepo?.variables?.url === item?.repos_url ? (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <CircularProgress size={30} />
                </Box>
              ) : (
                (() => {
                  const matchingRepos = reduxData.repos?.filter(
                    (repoData) => repoData?.url === item?.repos_url
                  );

                  if (!matchingRepos?.length) {
                    return (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontWeight={600}
                        sx={{ textAlign: "center" }}
                      >
                        No repositories found.
                      </Typography>
                    );
                  }

                  return matchingRepos.map((repoData, index) => (
                    <Box key={index}>
                      {repoData?.repos?.length > 0 ? (
                        repoData.repos.map((repo, idx) =>
                          repo ? (
                            <Box
                              key={idx}
                              sx={{
                                bgcolor: "custom.card",
                                border: "1px solid",
                                borderColor: "custom.border",
                                my: 1,
                                p: 2,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  mb: 1,
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  fontWeight={600}
                                >
                                  {repo?.name}
                                </Typography>

                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                  }}
                                >
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    fontWeight={600}
                                    sx={{ mt: 0.5 }}
                                  >
                                    {repo?.stargazers_count}
                                  </Typography>
                                  <StarIcon />
                                </Box>
                              </Box>

                              <Typography
                                variant="body2"
                                color="text.secondary"
                                fontWeight={500}
                              >
                                {repo?.description || "-"}
                              </Typography>
                            </Box>
                          ) : (
                            <Typography
                              key={idx}
                              variant="body2"
                              color="text.secondary"
                            >
                              Invalid repository data.
                            </Typography>
                          )
                        )
                      ) : (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ textAlign: "center", mt: 2 }}
                        >
                          No repositories available in this data.
                        </Typography>
                      )}
                    </Box>
                  ));
                })()
              )}
            </CardContent>
          </Collapse>
        </Card>
      ))}

      {/* Infinite Scroll Trigger */}
      {hasNextPage && !isFetching && (
        <Box ref={ref} sx={{ height: "1px", visibility: "hidden" }} />
      )}

      {/* Show Loading Spinner When Fetching Next Page */}
      {isFetchingNextPage && (
        <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
          <CircularProgress size={30} />
        </Box>
      )}
    </Box>
  );
};
