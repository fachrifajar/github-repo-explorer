import { Card, CardHeader, Skeleton } from "@mui/material";

export const SkeletonCard = () => {
  return (
    <Card
      sx={{
        bgcolor: "custom.card",
        border: "1px solid",
        borderColor: "custom.border",
        my: 1,
      }}
    >
      <CardHeader
        avatar={<Skeleton variant="circular" width={40} height={40} />}
        title={<Skeleton variant="text" width="60%" />}
        action={<Skeleton variant="rectangular" width={24} height={24} />}
      />
    </Card>
  );
};
