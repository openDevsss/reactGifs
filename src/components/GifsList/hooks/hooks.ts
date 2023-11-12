import { useQuery } from "react-query";
import { getGifs } from "./service";
import { AxiosError } from "axios";

export function useGetGifs() {
  const { data, isLoading } = useQuery(
    ["gifs"],
    async () => (await getGifs()).data,
    {
      retry: false,
      onError: (err: AxiosError<{ message?: string }>) => {
        console.log(err);
      },
    }
  );
  return { data, isLoading };
}
