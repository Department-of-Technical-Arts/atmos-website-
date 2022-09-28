import React, { useEffect, useState } from "react";
import { Drawer, IconButton, ListItemIcon } from "@mui/material";
import {
  List,
  ListItemButton,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import "./Drawer.css";
import { IoMenu, IoClose } from "react-icons/io5";
import { NavLink, Switch } from "react-router-dom";

const DrawerComp = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            margin: "auto",
            background: "rgba(4,0,0,0.4)",
            paddingTop: "6%",
          },
        }}
      >
        <div className="close-btn">
          <Button onClick={() => setOpen(!open)}>
            {open ? <IoClose color="white" fontSize={36} /> : ""}
          </Button>
        </div>
        <List>
          <ListItem>
            <ListItemButton>
              <a href="/about">
                <ListItemText
                  primaryTypographyProps={{ fontSize: "26px" }}
                  primary="ABOUT"
                  sx={{ color: "white", marginTop: "35%" }}
                />
              </a>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <a href="/events">
                <ListItemText
                  primaryTypographyProps={{ fontSize: "26px" }}
                  primary="EVENTS "
                  sx={{ color: "white", marginTop: "45%" }}
                />
              </a>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <a href="/sponsors">
                <ListItemText
                  primaryTypographyProps={{ fontSize: "26px" }}
                  primary="SPONSORS "
                  sx={{ color: "white", marginTop: "45%" }}
                />
              </a>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <a href="/gallery">
                <ListItemText
                  primaryTypographyProps={{ fontSize: "26px" }}
                  primary="GALLERY"
                  sx={{ color: "white", marginTop: "45%" }}
                />
              </a>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Button onClick={() => setOpen(!open)}>
        {/*{open ? "": "Icon"}*/}
        {open ? "" : <IoMenu color="white" fontSize={36} />}
      </Button>
    </>
  );
};

export default DrawerComp;
