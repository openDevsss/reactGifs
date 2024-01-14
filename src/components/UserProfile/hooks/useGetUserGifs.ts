import { AxiosError } from "axios";
import { useQuery } from "react-query";

import { GetUserGifs } from "./service";

export function useGetUserGifs(id: string) {
  const { data, refetch, isLoading } = useQuery(
    ["gifs"],
    async () => GetUserGifs(id),
    {
      retry: false,
      onError: (err: AxiosError<{ message?: string }>) => {
        console.log(err);
      },
    },
  );
  return { data: data?.user, refetch, isLoading };
}
