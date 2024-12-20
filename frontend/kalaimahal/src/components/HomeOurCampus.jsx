import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Virtual,
  Autoplay,
  A11y,
  Navigation,
} from "swiper/modules";
import { useMediaQuery } from 'react-responsive';
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/autoplay";
import { CampusCard, Compus,SwipperModule } from "../css/components/HomeOurCampus.module.css";
import { useEffect, useState } from "react";
import axios from 'axios'
function HomeOurCampus() {
  const isTablet = useMediaQuery({ query: '(max-width: 1700px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })
  let [data ,setData]=useState([])
  useEffect(
    ()=>{
      axios.get("/api/v2/kalaimahal/sembanarkiol/branch").then((d)=>setData(d.data.data))
    },[1]
  )
  let Branches = [...data]
  console.log(Branches);

  return (
    <Box className={Compus}>
      <Typography variant="h3" marginBottom={"50px"}>
        Our Branches
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Swiper
        className={SwipperModule}
          modules={[ Pagination,Navigation, Virtual, Autoplay,A11y]}
          spaceBetween={50}
          slidesPerView={ isMobile? 1:isTablet ? 2 : 3}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          Virtual
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {Branches.map(({ name, description,image },index) => (
            <SwiperSlide key={index}>
              <Card className={CampusCard} sx={{height:isMobile?"400px":"600px"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height={isMobile?"70%":"60%"}
        sx={{objectFit:"fill"}}
        image={`/static/image/${image}`}
      />
                <CardContent>
                  <Box
                    display={"inline-flex"}
                    maxWidth={"25rem"}
                    padding={isMobile?"5px":"20px"}
                    flexDirection={"column"}
                    flexWrap={"wrap"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography variant={isMobile?"h6":"h3"}>{name}</Typography>
                    <Typography fontSize={isMobile?"10px":null} textAlign={"justify"}>{description,image}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default HomeOurCampus;
