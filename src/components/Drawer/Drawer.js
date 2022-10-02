import React, { useEffect, useState } from "react";
import { Drawer, IconButton, ListItemIcon,useMediaQuery } from "@mui/material";
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
  const isTablet = useMediaQuery('(max-width:1024px)','(max-width:1024px)');
  const isMobile = useMediaQuery('(max-width: 480px)','(max-width: 480px)'); 
  console.log(isTablet)
  console.log(isMobile)
  let fontSize,itemTextSize,marginTop;

  if(isTablet && !isMobile){
    fontSize=24;
    itemTextSize=24;
    marginTop = "100%";
  }
  else if(isMobile){
    fontSize=24;
    itemTextSize= "1rem";
    marginTop = "120%";
  }
  else{
    fontSize=36;
    itemTextSize= 26;
    marginTop="45%";
  }

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
            {open ? <div className="iobutton"><IoClose color="white" fontSize={fontSize} /></div> : ""}
          </Button>
        </div>
        <List>
          <ListItem>
            <ListItemButton>
              <a href="/about">
                <ListItemText
                  primaryTypographyProps={{ fontSize: itemTextSize }}
                  primary="ABOUT"
                  sx={{ color: "white", marginTop: marginTop }}
                />
              </a>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <a href="/events">
                <ListItemText
                  primaryTypographyProps={{ fontSize: itemTextSize }}
                  primary="EVENTS "
                  sx={{ color: "white", marginTop: marginTop }}
                />
              </a>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <a href="/sponsors">
                <ListItemText
                  primaryTypographyProps={{ fontSize: itemTextSize }}
                  primary="SPONSORS "
                  sx={{ color: "white", marginTop: marginTop }}
                />
              </a>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <a href="/gallery">
                <ListItemText
                  primaryTypographyProps={{ fontSize: itemTextSize }}
                  primary="GALLERY"
                  sx={{ color: "white", marginTop: marginTop }}
                />
              </a>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <div className="open-btn">
      <Button onClick={() => setOpen(!open)}>
        {/*{open ? "": "Icon"}*/}
        {open ? "" : <IoMenu color="white" fontSize={36} />}
      </Button>
      </div>
      
    </>
  );
};

export default DrawerComp;
