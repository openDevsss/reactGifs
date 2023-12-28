import { ColorizedHashtag, HashtagItem, HashtagWrapper } from "./style";
interface TagsProps {
  onClick?: () => void;
  tag: string;
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
