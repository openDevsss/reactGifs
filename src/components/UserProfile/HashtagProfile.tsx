import { ColorizedHashtag, HashtagItem, HashtagWrapper } from "./style";
interface HashtagProps {
  tag: string;
}
export function HashtagProfile({ tag }: HashtagProps) {
  return (
    <HashtagWrapper>
      <HashtagItem
        label={tag}
        color="secondary"
        disabled={false}
        size="medium"
        variant="filled"
        icon={<ColorizedHashtag>#</ColorizedHashtag>}
      />
    </HashtagWrapper>
  );
}
