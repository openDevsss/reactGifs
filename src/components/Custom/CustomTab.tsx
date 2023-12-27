import { createTheme, ThemeProvider } from "@mui/material";
import { ProfileTab } from "../MyProfile/style";

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          minWidth: 0,
          marginRight: "24px",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "15px",
          lineHeight: "18px",
          padding: 0,
          textTransform: "uppercase",
          "@media (min-width: 0px)": {
            minWidth: 0,
          },
        },
      },
    },
  },
});

interface CustomTabProps {
  label: string;
  value: string;
  [key: string]: any;
}

export function CustomTab({ label, value, ...rest }: CustomTabProps) {
  return (
    <ThemeProvider theme={theme}>
      <ProfileTab {...rest.getTabProps(value)} {...rest} label={label} />
    </ThemeProvider>
  );
}
