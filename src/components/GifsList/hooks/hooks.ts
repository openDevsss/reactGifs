import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { getGifs } from "./service";

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
