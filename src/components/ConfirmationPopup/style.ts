import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';

export const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0 solid #000',
  borderRadius: 12,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  outline: "none",
};
export const VerifyPopupWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PopupTitle = styled(Typography)`
  font-size: 22px;
  font-weight: 700;
  color: #5f3db5;
`;
export const PopupDescription = styled(Typography)`
  margin-top: 8px;
  font-size: 14px;
  color: #5f3db5;
`;
export const PopupEmail = styled(Typography)`
  font-size: 14px;
  color: #5f3db5;
  font-weight: 600;
`;
export const PopupButton = styled(Button)`
  margin-top: 40px;
  padding: 10px 20px;
  background-color: #5f3db5;
  color: #ffffff;
  border-radius: 20px;
  &:hover {
    background-color: #3e267c;
  }
`;
