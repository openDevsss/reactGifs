import React from "react";
import { LayoutUserProfile } from "./style";

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export function ProfileLayout({ children }: ProfileLayoutProps) {
  return <LayoutUserProfile>{children}</LayoutUserProfile>;
}
