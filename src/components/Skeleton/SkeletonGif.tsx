import { Skeleton, Box } from "@mui/material";
export const SkeletonGif = () => {
  return (
    <Box display="flex" flexDirection="column" width="600px" m="40px auto">
      <Box display="flex" gap="30px">
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "100%" }} />
      </Box>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={600}
        animation="wave"
        style={{ margin: "20px auto" }}
      />
    </Box>
  );
};
