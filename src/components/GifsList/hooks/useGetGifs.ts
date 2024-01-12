import { useQuery } from "react-query";

import { getGifs } from "./service";

export const useGetGifs = () => {
  const { data, ...rest } = useQuery(["gifs"], async () => getGifs(), {
    retry: false,
  });

  return { data: data?.data, ...rest };
};
