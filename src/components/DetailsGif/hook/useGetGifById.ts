import { useQuery } from "react-query";
import { getGifById } from "./service";
import { AxiosError } from "axios";

export function useGetGifById(id: string) {
  const { data, isLoading } = useQuery(
    ["gifById"],
    async () => getGifById(id),
    {
      retry: false,
      onError: (err: AxiosError<{ message?: string }>) => {
        console.log(err);
      },
    }
  );
  return { data: data, isLoading };
}
