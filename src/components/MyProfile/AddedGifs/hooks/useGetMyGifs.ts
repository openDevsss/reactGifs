import { useQuery } from "react-query";
import { getMyGifs } from "./service";
import { AxiosError } from "axios";

export function useGetMyGifs() {
  const { data } = useQuery(["my-gifs"], async () => (await getMyGifs()).data, {
    retry: false,
    onError: (err: AxiosError<{ message?: string }>) => {
      console.log(err);
    },
  });
  return { data };
}
