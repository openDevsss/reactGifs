import { Masonry } from "@mui/lab";
import { WrapperRecommendations } from "../RecommendationsItem/styled";

export function RecommendationsList() {
  return (
    <WrapperRecommendations>
      <Masonry columns={4} spacing={1}>
        {}
      </Masonry>
    </WrapperRecommendations>
  );
}
