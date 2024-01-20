import { Box, Skeleton } from "@mui/material";
import { FollowersWrapper } from "@components/UserProfile/style";
import { LayoutUserProfile } from "@layout/style";

import { SkeletonGif } from "./SkeletonGif";

export const SkeletonProfile = () => {
  const skeletonArray = Array.from({ length: 10 });
  return (
    <LayoutUserProfile style={{ width: "1200px" }}>
      <Box grid-area="mainInfo" width="100%" display="flex" gap="50px">
        <Skeleton variant="rounded" width={200} height={200} />
        <Box
          width="100%"
          justifyContent="space-around"
          display="flex"
          flexDirection="column"
        >
          <Box>
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem", width: "50%", height: "30px" }}
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem", width: "30%", height: "20px" }}
            />
          </Box>

          <Box gap="30px" display="flex">
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem", width: "100px", height: "20px" }}
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem", width: "100px", height: "20px" }}
            />
          </Box>
        </Box>
      </Box>
      <Box gridArea="userGifs" width="300px" m="0 0 0 100px">
        {skeletonArray.map((_, index) => (
          <SkeletonGif key={index} />
        ))}
      </Box>
      <FollowersWrapper style={{ width: "300px" }}></FollowersWrapper>
    </LayoutUserProfile>
  );
};
