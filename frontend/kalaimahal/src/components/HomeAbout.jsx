import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { AboutCard, FrontCard } from "../css/components/HomeAbout.module.css";
import { useMediaQuery } from "react-responsive";

function HomeAbout() {
  const isTablet = useMediaQuery({ query: "(max-width: 1700px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      marginBottom={"20px"}
      position={"relative"}
      marginTop={isMobile?"150px":null}
      marginLeft={isMobile?null:"7%"}

    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        className={FrontCard}
        top={isMobile ? "-25%" : null}
        left={isMobile?null:"4%"}
        width={isMobile?"25vw":null}
        height={isMobile?"15vh":null}
      >
        <Typography variant={isMobile ? "h3" : isTablet ? "h4" : "h1"}>
          About
        </Typography>
      </Box>
      <Box>
        <Card className={AboutCard}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box
              width={"70%"}
              height={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant="h6" paddingLeft={isMobile?null:"10%"}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                excepturi vero aliquid officia, a delectus, neque aspernatur
                nisi illo culpa eum quisquam nostrum ex ratione numquam! Earum
                perspiciatis harum minus!
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default HomeAbout;
