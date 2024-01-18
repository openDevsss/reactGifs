import { AxiosError } from "axios";
import { useQuery } from "react-query";

import { GetUserGifs } from "./service";

export function useGetUserInformation(id: string) {
  const { data, ...rest } = useQuery(["gifs"], async () => GetUserGifs(id), {
    retry: false,
    onError: (err: AxiosError<{ message?: string }>) => {
      console.error(err);
    },
  });
  return { data: data?.user, ...rest };
}
