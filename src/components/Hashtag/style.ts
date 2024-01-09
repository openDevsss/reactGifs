import styled from "@emotion/styled";
import { Box, Chip, Typography } from "@mui/material";

export const HashtagWrapper = styled(Box)`
  margin-right: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

//TODO: Если не писать !important стили берутся у Chip'a
export const ColorizedHashtag = styled(Typography)`
  background-color: #5f3db5 !important;
  color: #ffffff !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  margin-right: 3px !important;
  padding: 3px 7px !important;
  border-radius: 7px !important;
`;

export const HashtagItem = styled(Chip)`
  background-color: transparent;
  color: #000;
  & .MuiChip-label {
    padding: 0;
    text-transform: uppercase;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  & .MuiChip-icon {
    padding: 0;
    margin: 0;
  }
  & .MuiBox-root {
  }
`;
