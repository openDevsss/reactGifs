import { Box, Skeleton } from "@mui/material";

export const SkeletonProfile = () => {
  return (
    <Box width="600px" margin="0 auto">
      <Box display="flex" gap="30px">
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "100%" }} />
      </Box>
    </Box>
  );
};
