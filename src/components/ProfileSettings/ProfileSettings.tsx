import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { SettingsLayout } from "layout/SettingsLayout";
import React from "react";

import { useCurrentUser } from "@hooks/useCurrentUser";
import { ProfileEdit } from "./ProfileEdit";
import { settingsPage } from "./ProfileSettingsConfig";

export function ProfileSettings() {
  const currentUser = useCurrentUser();
  return (
    <SettingsLayout>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            "& .MuiDrawer-paper": {
              width: "240px",
              boxSizing: "border-box",
              top: "100px",
              borderRight: "none",
              height: "fit-content",
              position: "absolute",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <List>
            {settingsPage.map(({ title, icon }, index) => (
              <React.Fragment key={index}>
                <ListItem key={index} disablePadding>
                  <ListItemButton disableRipple>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={title} />
                  </ListItemButton>
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Drawer>
        <ProfileEdit
          nickname={currentUser?.nickname}
          email={currentUser?.email}
          avatar={currentUser?.avatar}
        />
      </Box>
    </SettingsLayout>
  );
}
