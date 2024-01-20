import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
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
      <ListItemAvatar sx={{ minWidth: "40px", mr: "16px" }}>
        <Link to={`/profile/${user?.id}`}>
          <Avatar alt="avatar" src={user?.avatar} />
        </Link>
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
