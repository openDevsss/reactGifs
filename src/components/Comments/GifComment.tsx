import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import type { User } from "types";

type CommentGif = {
  comment_text: string;
  user: User;
};

export function GifComment({ comment_text, user }: CommentGif) {
  return (
    <ListItem
      sx={{
        overflowX: "hidden",
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <ListItemAvatar>
        <Avatar alt="avatar" src={user?.avatar} />
      </ListItemAvatar>
      <ListItemText
        sx={{
          wordBreak: "break-word",
          fontSize: "20px",
        }}
      >
        {comment_text}
      </ListItemText>
    </ListItem>
  );
}
