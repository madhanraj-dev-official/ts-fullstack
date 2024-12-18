import { Box } from "@mui/material";
import HeaderDrawer from "./HeaderDrawer";
import HeaderNavigation from "./HeaderNavigation";
import { useMediaQuery } from "react-responsive";

function HeaderNav() {
  const isTablet = useMediaQuery({ query: "(max-width: 1246px)" });

  return (
    <>
      <Box sx={{backgroundColor:"gray"}} display={"flex"} justifyContent={"space-around"} alignItems={"baseline"}> <h1>Logo</h1> {!isTablet ? <HeaderNavigation /> : <HeaderDrawer />}</Box>
    </>
  );
}

export default HeaderNav;
