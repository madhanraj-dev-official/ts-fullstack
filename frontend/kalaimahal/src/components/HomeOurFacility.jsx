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
export default function HomeOurFacility() {
  const isTablet = useMediaQuery({ query: "(max-width: 1700px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  const Branches = [
    {
      title: "classrooms",
      image:"https://www.teachhub.com/wp-content/uploads/2020/05/Classroom-Management-for-an-Effective-Learning-Environment-768x512.jpg"
    },
    {
      title: "libraries",
      image:"https://www.reganagency.com/wp-content/uploads/2023/10/Library-Management-1024x683.jpg"

    },
    {
      title: "laboratories",
      image:"https://evolveltd.eu/app/uploads/2020/01/255376950_439497967739323_1355680417886447892_n-1.jpg"
    },
    {
      title: "sports",
      image:"https://shikshaabhiyan.co.in/wp-content/uploads/2024/03/1.jpg"
    },
    {
      title: "medical room",
      image:"https://tws.edu.in/wp-content/uploads/2015/11/TWS_infrastructure_infirmaryImage02.jpg"
    },
    {
      title: "computer labs",
      image:"https://5.imimg.com/data5/DJ/PV/GLADMIN-64970456/computer-lab-class.png"
    },
  ];
  return (
    <Box className={Compus}>
      <Typography variant="h3" marginBottom={"50px"}>
        Our Facilities
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
