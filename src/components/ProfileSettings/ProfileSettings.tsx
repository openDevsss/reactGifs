import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { EnvelopeSimple, Tray } from "@phosphor-icons/react";
import { SettingsLayout } from "layout/SettingsLayout";

const drawerWidth = 240;
export function ProfileSettings() {
  return (
    <SettingsLayout>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              mt: "100px",
              borderRight: "none",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <>
                <ListItem key={text} disablePadding>
                  <ListItemButton disableRipple>
                    <ListItemIcon>
                      {index % 2 === 0 ? (
                        <Tray size={32} />
                      ) : (
                        <EnvelopeSimple size={32} />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              </>
            ))}
          </List>
        </Drawer>
        <Box
          component="div"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        ></Box>
      </Box>
    </SettingsLayout>
  );
}
