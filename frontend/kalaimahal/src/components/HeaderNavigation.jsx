import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import {HeaderNavLink,SubHeaderNavLink,FooterNavLink} from "../css/components/BigHeader.module.css"
export default function HeaderNavigation({direction,isHeader=false,isSubHeader=false,isAcitve}) {
  const nav = [
    { name: "Home",route:"/" },
    { name: "About",route:"/about" },
    { name: "Courses",route:"/courses" },
    { name: "Testimonial",route:"/testimonial" },
    { name: "Acadimics",route:"/acadimics" },
    { name: "Requirement",route:"/requirement" },
    { name: "Event",route:"/event" },
    { name: "Kids",route:"/kids" },
    { name: "Contact",route:"/contact" },
  ]
  return (
    <Box component={"div"} className={isSubHeader ? SubHeaderNavLink :isHeader ? HeaderNavLink : FooterNavLink} flexDirection={direction??null}>
          {
          nav.map(({name,route},index)=>(<NavLink to={route} key={index} >
            <Typography component={"p"} sx={{color:isAcitve==route?"var(--hover-bg)":null}} variant="p">
              {name}
            </Typography>
          </NavLink>
))}
        </Box>
  )
}

