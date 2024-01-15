import React from "react";

import { LayoutHomePage } from "./style";

interface RecomendationLayotProps {
  children: React.ReactNode;
}

export function RecomendationLayot({ children }: RecomendationLayotProps) {
  return <LayoutHomePage>{children}</LayoutHomePage>;
}
