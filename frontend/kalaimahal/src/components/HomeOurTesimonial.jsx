import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Virtual, Autoplay, A11y, Navigation } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/autoplay";
import {
  CampusCard,
  Compus,
  SwipperModule,
} from "../css/components/HomeOurCampus.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function HomeOurTestimonial() {
  const isTablet = useMediaQuery({ query: "(max-width: 1700px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  let [data ,setData]=useState([])
  useEffect(
    ()=>{
      axios.get("/api/v2/kalaimahal/sembanarkiol/kids?kid=false").then((d)=>setData(d.data.data))
    },[1]
  )
  let testimonial = [...data]
  return (
    <Box className={Compus}>
      <Typography variant="h3" marginBottom={"50px"}>
        What Our Students Says
      </Typography>
      <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, at quaerat. dfhvshfv jdfvsvf eadvigfig sdbbfosgouf ukekfogf</Typography>
      <Box
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Swiper
          className={SwipperModule}
          modules={[Pagination,Navigation, Virtual, A11y]}
          spaceBetween={50}
          slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
          loop={true}
          Virtual
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {testimonial.map(({ name , image },index) => (
            <SwiperSlide key={index}>
              <Card
                className={CampusCard}
                sx={{ height:isMobile?"400px":"600px", position: "relative" }}
              >
                <CardMedia
                  component="img"
                  title={name}
                  alt={name}
                  height="100%"
                  image={`/static/kids/${image}`}
                  sx={{objectFit:"fill"}}
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
