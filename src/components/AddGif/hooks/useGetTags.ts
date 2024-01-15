import { useQuery } from "react-query";

import { getTags } from "./service";

export function useGetTags() {
  const { data, error, ...rest } = useQuery(["tags"], async () => getTags(), {
    retry: false,
  });

  if (error) {
    console.error("Ошибка при загрузке тегов:", error);
    return { data: null, error, ...rest };
  }

  return { data: data?.data, error: null, ...rest };
}
