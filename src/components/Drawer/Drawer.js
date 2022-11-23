import React, { useState } from "react";
import { Drawer,useMediaQuery } from "@mui/material";
import { List, ListItemButton, ListItem, ListItemText, Button } from "@mui/material";
import "./Drawer.css";
import { IoMenu, IoClose } from "react-icons/io5";

const DrawerComp = () => {

  const isTablet = useMediaQuery('(max-width:1024px)','(max-width:1024px)');
  const isMobile = useMediaQuery('(max-width: 480px)','(max-width: 480px)'); 

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
  else {
    fontSize=36;
    itemTextSize= 26;
    marginTop="45%";
  }

  const [open, setOpen] = useState(false);
  return (
    <div>
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
              <a href="/schedule">
                <ListItemText
                  primaryTypographyProps={{ fontSize: itemTextSize }}
                  primary="SCHEDULE"
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
        {open ? "" : <IoMenu color="white" fontSize={36} />}
      </Button>
      </div>
    </div>
  );
};

export default DrawerComp;
