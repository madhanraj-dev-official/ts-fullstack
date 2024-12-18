import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Virtual, Autoplay, A11y, Navigation } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/autoplay";
import {
  CampusCard,
  Compus,
  SwipperModule,
} from "../css/components/HomeOurCampus.module.css";
export default function HomeOurEvent() {
  const isTablet = useMediaQuery({ query: "(max-width: 1700px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 950px)" });

  const Branches = [
    {
      title:"Dancing",
      image:"https://raniartsandteak.co.in/cdn/shop/products/DSC_3173_01.jpg?v=1647342729"
    },
    {
      title:"Drawing",
      image:"https://cdn.shopify.com/s/files/1/0047/4231/6066/files/paper_sunflower_1_800x.jpg"
    },
    {
      title: "Singing",
      image:"https://img.freepik.com/premium-vector/happy-little-girl-singing-song-with-microphone_535862-372.jpg"
    },
    {
      title: "Sports",
      image:"https://cdn.vocabulary.com/units/iofdi62y/feature.png?width=500&v=1915b7a7557"
    },
  ];
  return (
    <Box className={Compus}>
      <Typography variant="h3" marginBottom={"50px"}>
        Our Events
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
          modules={[Pagination, Navigation,Virtual, Autoplay, A11y]}
          spaceBetween={50}
          slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
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
          {Branches.map(({ title , image },index) => (
            <SwiperSlide key={index}>
              <Card
                className={CampusCard}
                sx={{ height:isMobile?"400px":"600px", position: "relative" }}
              >
                <CardMedia
                  component="img"
                  title={title}
                  alt="green iguana"
                  height="100%"
                  image={image}
                  sx={{objectFit:"fill"}}
                />
                <CardContent sx={{ position: "absolute", bottom: "20%",left:"0px",width:"90%" }}>
                  <Typography variant={isMobile?"h5":"h3"} component={"p"} fontWeight={isMobile?700:800} color="yellow" sx={{textShadow: "2px 2px #000000"}} textAlign={"center"}>
                    {title}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
