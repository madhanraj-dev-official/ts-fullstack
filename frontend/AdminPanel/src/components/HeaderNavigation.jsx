import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  HeaderNavLink,
  SubHeaderNavLink,
  FooterNavLink,
} from "../css/components/BigHeader.module.css";
export default function HeaderNavigation({
  direction="row",
  isHeader = true,
  isSubHeader = false,
  isAcitve=false,
}) {
  const rootRoute = '/admin/v2'
  const nav = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Courses", route: "/courses" },
    { name: "Testimonial", route: "/testimonial" },
    { name: "Acadimics", route: "/acadimics" },
    { name: "Requirement", route: "/requirement" },
    { name: "Event", route: "/event" },
    { name: "Kids", route: "/kids" },
    { name: "Mark", route: "/marks" },
    { name: "Contact", route: "/contact" },
  ];
  return (
    <Box
      component={"div"}
      className={
        isSubHeader
          ? SubHeaderNavLink
          : isHeader
          ? HeaderNavLink
          : FooterNavLink
      }
      flexDirection={direction ?? null}
    >
      {nav.map(({ name, route }, index) => (
        <NavLink to={`${rootRoute}${route}`} key={index} style={{marginLeft:"20px"}}>
          <Typography
            component={"p"}
            sx={{ color: isAcitve == route ? "var(--hover-bg)" : null }}
            variant="p"
          >
            {name}
          </Typography>
        </NavLink>
      ))}
    </Box>
  );
}
