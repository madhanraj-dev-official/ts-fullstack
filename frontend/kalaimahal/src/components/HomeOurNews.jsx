import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import "swiper/css/autoplay";

import { useEffect, useState } from "react";
import axios from "axios";
import { Autoplay } from "swiper/modules";
export default function HomeOurNews() {
  const isTablet = useMediaQuery({ query: "(max-width: 1700px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 950px)" });
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/api/v2/kalaimahal/sembanarkiol/event")
      .then((d) => setData(d.data.data));
  }, [1]);
  let event = [...data];

  return (
    <Box marginX={"10vw"} marginY={"100px"}>
      <Typography variant="h3" marginBottom={"50px"} textAlign={"center"}>
        News Updates
      </Typography>
      <Typography textAlign={"center"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, at
        quaerat. dfhvshfv jdfvsvf eadvigfig sdbbfosgouf ukekfogf
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-around"}
        alignItems={"center"}
        marginTop={"30px"}
        borderRadius={"10px"}
      >
        <Swiper
          modules={[Autoplay]}
          direction="vertical"
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 3000, // 3 seconds per update
            disableOnInteraction: false,
          }}
          style={{
            height: "200px",
            width: "100%",
            backgroundColor: "#f7f7f7",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft:"10%",
            paddingRight:"10%",
            paddingTop:"5%",
            borderRadius:"10px"
          }}
        >
          {event.map(({ name, description }, index) => (
            <SwiperSlide key={index}>
              <Typography component={"p"} variant="h6" sx={{backgroundColor:"white",padding:"3%",borderRadius:"10px"}}>
                {name}{"  ->  "}{description}
              </Typography>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
