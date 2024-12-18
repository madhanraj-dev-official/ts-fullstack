import { Box } from "@mui/material";
import React, { useState } from "react";
import HeaderNavigation from "./HeaderNavigation";
import { useMediaQuery } from "react-responsive";
import HeaderDrawer from "./HeaderDrawer";

function Header({isAcitve}) {
  const isTablet = useMediaQuery({ query: "(max-width: 1246px)" });
  const [showBar,setShowBar] = useState(false) 
  const [showBarHeight,setShowBarHeight] = useState(false) 
  window.addEventListener("scroll",()=>{
      if(window.scrollY > window.innerHeight){
        setShowBar(true)
        if(window.scrollY > window.innerHeight+100){
          setShowBarHeight(true)
        }
      }else{
        setShowBar(false)
        setShowBarHeight(false)
      }
    }
  )
  return (
    <Box
      component={"header"}
      flexDirection={"row"}
      justifyContent={"space-around"}
      alignItems={"center"}
      boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px"
      paddingTop={"30px"}
      paddingBottom={"20px"}
      width={"100wv"}
      position={"sticky"}
      sx={{display:showBar?"flex":"none",backgroundColor:"white"}}
      top={'0px'}
      zIndex={"99"}
      
      
    >
      <h1>Logo</h1>
      {isTablet ? <HeaderDrawer isSubHeader={true} /> : <HeaderNavigation isAcitve={isAcitve} isHeader={true} isSubHeader={true}/>}
    </Box>
  );
}

export default Header;
