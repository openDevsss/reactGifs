import { useEffect } from "react";

import { getTags } from "../../features/tags/tags-slice";
import { selectorTags } from "../../features/tags/tags-selectors";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";
import { StyledChipTitle, StyledTitleStep, StyledWrapperGif } from "./style";

export const StepWithSettingsTag = () => {
  const dispatch = useAppDispatch();
  const tags = useAppSelector(selectorTags);
  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  return (
    <>
      <StyledTitleStep>Choose liked Tags</StyledTitleStep>
      <StyledWrapperGif>
        {tags?.map(({ name, id }) => (
          <StyledChipTitle key={id} label={name} />
        ))}
      </StyledWrapperGif>
    </>
  );
};
