import React from "react";
import { LayoutHomePage } from "./style";

interface HomeLayotProps {
  children: React.ReactNode;
}

export function HomeLayout({ children }: HomeLayotProps) {
  return <LayoutHomePage>{children}</LayoutHomePage>;
}
