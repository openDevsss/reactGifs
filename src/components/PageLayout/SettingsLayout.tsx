import { SettingsLayoutWrapper } from "./style";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export function SettingsLayout({ children }: SettingsLayoutProps) {
  return <SettingsLayoutWrapper>{children}</SettingsLayoutWrapper>;
}
