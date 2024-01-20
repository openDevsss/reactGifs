import { useQuery } from "react-query";
import { gifsKeys } from "utils/gifs-query-key";

import { getGifs } from "./service";

export const useGetGifs = () => {
  const { data, ...rest } = useQuery(gifsKeys.all, async () => getGifs(), {
    retry: false,
  });

  return { data: data?.data, ...rest };
};
