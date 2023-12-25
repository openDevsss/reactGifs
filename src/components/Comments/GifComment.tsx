import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { User } from "../../types/User";

type CommentGif = {
  comment_text: string;
  user: User;
};

export function GifComment({ comment_text, user }: CommentGif) {
  console.log(comment_text);
  return (
    <ListItem
      sx={{
        overflowX: "hidden",
        fontSize: "14px",
      }}
    >
      <ListItemAvatar>
        <Avatar alt="avatar" src={user?.avatar} />
      </ListItemAvatar>
      <ListItemText
        sx={{
          wordBreak: "break-word",
        }}
      >
        {comment_text}
      </ListItemText>
    </ListItem>
  );
}
