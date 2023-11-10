/* eslint-disable react/jsx-filename-extension */
import { createTheme, ThemeProvider } from '@mui/material';

import { ProfileTab } from '../MyProfile/styled';

const theme = createTheme({
  overrides: {
    MuiTab: {
      root: {
        minWidth: 0,
        marginRight: '24px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '15px',
        lineHeight: '18px',
        padding: 0,
        textTransform: 'uppercase',
        '@media (min-width: 0px)': {
          minWidth: 0,
        },
      },
    },
  },
});

const getTabProps = (index) => ({
  id: `tab-${index}`,
  'aria-controls': `tabpanel-${index}`,
  value: `${index}`,
});

export function CustomTab({ label, value, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <ProfileTab {...getTabProps(value)} {...rest} label={label} />
    </ThemeProvider>
  );
}
