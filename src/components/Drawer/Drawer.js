import React, { useEffect } from "react";
import { Drawer, IconButton, ListItemIcon } from "@mui/material";
import { useState } from "react";
import { List, ListItemButton,ListItem, ListItemText,Button } from "@mui/material";
import "./Drawer.css";
import {IoMenu} from 'react-icons/io5';

const DrawerComp = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)} PaperProps={{sx:{margin:'auto', background: 'rgba(4,0,0,0.4)'}}} >
      <List>
            <ListItem>
                <ListItemText primary="ABOUT" sx={{color: 'white'}}/>
            </ListItem>
            <ListItem>
                <ListItemText primary= 'EVENTS ' sx={{color: 'white'}}/>
            </ListItem>
            <ListItem>
                <ListItemText primary= 'SPONSORS ' sx={{color: 'white'}}/>
            </ListItem>
            <ListItem>
                <ListItemText primary= 'GALLERY ' sx={{color: 'white'}}/>
            </ListItem>
        </List>
      </Drawer>
        <Button onClick={()=>setOpen(!open)}>
            {/*{open ? "": "Icon"}*/}
            {open ? "":<IoMenu color="white" fontSize={36} />}
        </Button>
    </>
  );
};

export default DrawerComp;

