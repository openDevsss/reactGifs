import { useQuery } from "react-query";
import { getTags } from "./service";

export function useGetTags() {
  const { data, ...rest } = useQuery(["tags"], async () => getTags(), {
    retry: false,
  });

  return { data: data?.data, ...rest };
}
