import { AxiosError } from "axios";
import { useQuery } from "react-query";

import { getGifById } from "./service";

export function useGetGifById(id: string) {
  const { data: gif, isLoading } = useQuery(
    ["gifById"],
    async () => getGifById(id),
    {
      retry: false,
      onError: (err: AxiosError<{ message?: string }>) => {
        console.log(err);
      },
    },
  );
  return { data: gif?.data, isLoading };
}
