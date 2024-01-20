import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { gifsKeys } from "utils/gifs-query-key";

import { getGifById } from "./service";

export function useGetGifById(id: string) {
  const { data: gif, isLoading } = useQuery(
    gifsKeys.detail(id),
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
