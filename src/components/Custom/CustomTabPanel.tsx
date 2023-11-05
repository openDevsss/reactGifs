import { Box } from "@mui/material";

export function CustomTabPanel({
  children,
  value,
  index,
  childrenProps = {},
  ...other
}: any) {
  return (
    <>
      {value === index && (
        <Box
          role="tabpanel"
          hidden={value !== index}
          id={`tabpanel-${index}`}
          aria-labelledby={`tab-${index}`}
          {...other}
        >
          {children}
        </Box>
      )}
    </>
  );
}
