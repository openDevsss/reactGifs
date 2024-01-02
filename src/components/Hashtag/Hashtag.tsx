import { ColorizedHashtag, HashtagItem, HashtagWrapper } from "./style";
interface TagsProps {
  tag: string;
  onClick?: () => void;
}
export function Hashtag({ onClick, tag }: TagsProps) {
  return (
    <HashtagWrapper onClick={onClick}>
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
