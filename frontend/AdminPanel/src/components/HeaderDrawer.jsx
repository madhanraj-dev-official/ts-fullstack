


// // Icons
import HouseIcon from "@mui/icons-material/House";
import InfoIcon from "@mui/icons-material/Info";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MessageIcon from "@mui/icons-material/Message";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import ToysIcon from "@mui/icons-material/Toys";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
// libs
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from "react-router-dom";
import { HeaderDrawerMenu } from "../css/components/BigHeader.module.css";


export default function HeaderDrawer() {
    const Navigation = useNavigate();
    const [state, setState] = React.useState({
      right: false,
    });
    const rootRoute = '/admin/v2'

    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        className={HeaderDrawerMenu}
      >
        <List>
          <ListItemButton>
              <ListItemIcon><CloseIcon/></ListItemIcon>
          </ListItemButton>
          {[
            { name: "Home",route: "/", icon: <HouseIcon /> },
            { name: "About",route: "/about", icon: <InfoIcon /> },
            { name: "Courses",route: "/courses", icon: <LocalLibraryIcon /> },
            { name: "Testimonial",route: "/testimonial", icon: <MessageIcon /> },
            { name: "Acadimics",route: "/acadimics", icon: <GroupsIcon /> },
            { name: "Requirement",route: "/requirement", icon: <WorkIcon /> },
            { name: "Event",route: "/event", icon: <EventIcon /> },
            { name: "Kids",route: "/Kids", icon: <ToysIcon /> },
            { name: "Mark",route: "/Marks", icon: <ToysIcon /> },
            { name: "Contact",route: "/contact", icon: <CallIcon /> },
          ].map(({ name, icon ,route},index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{color:"#fff",borderBottom:"1px solid"}} onClick={() => Navigation(`${rootRoute}${route}`)}>
                <ListItemIcon sx={{color:"#fff"}}>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
  );

  return (
    <div>
      {/* {['right'].map((anchor) => ( */}
        <React.Fragment key={"right"}>
          <Button sx={{color:"#fff"}} onClick={toggleDrawer("right", true)}><MenuIcon/></Button>
          <SwipeableDrawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            {list("right")}
          </SwipeableDrawer>
        </React.Fragment>
      {/* ))} */}
    </div>
  );
}
