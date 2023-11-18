import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { getTags } from "./service";

export function useGetTags() {
  const { data } = useQuery(["tags"], async () => (await getTags()).data, {
    retry: false,
    onError: (err: AxiosError<{ message?: string }>) => {
      console.log(err);
    },
  });
  return { data };
}
