import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { User } from "../../types/UserType";

type CommentGif = {
  comment_text: string;
  user: User;
};
export default function GifComment({ comment_text, user }: CommentGif) {
  //   const currentUser = useAppSelector(selectCurrentUser);
  return (
    <ListItem
      sx={{
        overflowX: "hidden",
      }}
    >
      <ListItemAvatar>
        <Avatar alt="avatar" src={user?.avatar} />
      </ListItemAvatar>
      <ListItemText
        sx={{
          wordBreak: "normal",
        }}
      >
        {comment_text}
      </ListItemText>
    </ListItem>
  );
}
