import { Box } from '@mui/material';

export function CustomTabPanel({
  children, value, index, ...other
}: any) {
  return (
    <div>
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
    </div>
  );
}
