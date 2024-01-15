import { InputAdornment } from "@mui/material";
import { MagnifyingGlass } from "@phosphor-icons/react";

import { SearchHeader, WrapperSearch } from "./style";

export const HeaderSearch = ({ isMatches480 }: { isMatches480: boolean }) => {
  return (
    <WrapperSearch>
      {!isMatches480 && (
        <SearchHeader
          placeholder="search"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MagnifyingGlass size={18} color="#6F4FF2" />
              </InputAdornment>
            ),
          }}
        />
      )}
    </WrapperSearch>
  );
};
