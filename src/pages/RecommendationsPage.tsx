import { RecommendationsList } from "@components/RecommendationsList/RecommendationsList";
import { RecomendationLayot } from "@layout/RecomendationLayout";

export function RecommendationsPage() {
  return (
    <RecomendationLayot>
      <RecommendationsList />
    </RecomendationLayot>
  );
}
