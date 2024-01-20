export const gifsKeys = {
  all: ["gifs"] as const,
  details: () => [...gifsKeys.all, "detail"] as const,
  detail: (id: string) => [...gifsKeys.details(), id] as const,
};
