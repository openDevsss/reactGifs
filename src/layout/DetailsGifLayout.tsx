import React from "react";

import { LayoutDetailsGif } from "./style";

interface DetailsGifLayoutProps {
  children: React.ReactNode;
}

export function DetailsGifLayout({ children }: DetailsGifLayoutProps) {
  return <LayoutDetailsGif>{children}</LayoutDetailsGif>;
}
