import { Box, Button, Typography } from "@mui/material";
import { header ,HeaderNav,HeaderText,HeaderButton,Home,About} from "../css/components/BigHeader.module.css";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import Logo from "../assets/images/logo.png";
import HeaderDrawer from "./HeaderDrawer";
import HeaderNavigation from "./HeaderNavigation";
function BigHeader({MainContent,SubContent,Type,Img}) {
  const isTablet = useMediaQuery({ query: '(max-width: 1246px)' })
  const height = window.innerHeight+1
  return (
    <Box className={[header,Type=="Home"?Home:About]} sx={Img}>
      <Box component={"nav"} className={HeaderNav}>
        <NavLink to="/">
          <Box component={"img"} src={Logo}></Box>
        </NavLink>
        {isTablet?<HeaderDrawer/>:<HeaderNavigation isHeader={true}/>}
      </Box>
      <Box component={"div"} className={HeaderText}>
        <Typography component={"p"} variant="h1">{MainContent}</Typography>
        <Typography component={"p"} variant="p">{SubContent}</Typography>
        <Button variant={"outlined"} size={isTablet ? "small":"large"}  color="#fff" className={HeaderButton} onClick={()=>window.scrollTo({top:height,behavior:"smooth"})}>Vist US know More !</Button>
      </Box>
    </Box>
  );
}

export default BigHeader;
