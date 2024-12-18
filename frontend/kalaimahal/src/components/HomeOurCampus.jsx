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
function HomeOurCampus() {
  const isTablet = useMediaQuery({ query: '(max-width: 1700px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })

  const Branches = [
    {
      title: "Kids",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam reiciendis tempore dicta molestiae repellat vero qui aut numquam magni architecto officiis nulla, it",
    },
    {
      title: "1-10",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam reiciendis tempore dicta molestiae repellat vero qui aut numquam magni architecto officiis nulla, it",
    },
    {
      title: "Kids",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam reiciendis tempore dicta molestiae repellat vero qui aut numquam magni architecto officiis nulla, it",
    },
    {
      title: "1-10",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam reiciendis tempore dicta molestiae repellat vero qui aut numquam magni architecto officiis nulla, it",
    },
    {
      title: "Kids",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam reiciendis tempore dicta molestiae repellat vero qui aut numquam magni architecto officiis nulla, it",
    },
    {
      title: "1-10",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam reiciendis tempore dicta molestiae repellat vero qui aut numquam magni architecto officiis nulla, it",
    },
    {
      title: "Kids",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam reiciendis tempore dicta molestiae repellat vero qui aut numquam magni architecto officiis nulla, it",
    },
    {
      title: "1-10",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam reiciendis tempore dicta molestiae repellat vero qui aut numquam magni architecto officiis nulla, it",
    },
    {
      title: "Kids",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam reiciendis tempore dicta molestiae repellat vero qui aut numquam magni architecto officiis nulla, it",
    },
    {
      title: "1-10",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam reiciendis tempore dicta molestiae repellat vero qui aut numquam magni architecto officiis nulla, it",
    },
    {
      title: "Kids",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam reiciendis tempore dicta molestiae repellat vero qui aut numquam magni architecto officiis nulla, it",
    },
    {
      title: "1-10",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam reiciendis tempore dicta molestiae repellat vero qui aut numquam magni architecto officiis nulla, it",
    },
    {
      title: "Kids",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam reiciendis tempore dicta molestiae repellat vero qui aut numquam magni architecto officiis nulla, it",
    },
    {
      title: "1-10",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam reiciendis tempore dicta molestiae repellat vero qui aut numquam magni architecto officiis nulla, it",
    },
    {
      title: "11-12",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam reiciendis tempore dicta molestiae repellat vero qui aut numquam magni architecto officiis nulla, it",
    },
  ];
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
          {Branches.map(({ title, content },index) => (
            <SwiperSlide key={index}>
              <Card className={CampusCard} sx={{height:isMobile?"400px":"600px"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height={isMobile?"70%":"60%"}
        sx={{objectFit:"fill"}}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ7tuDf0508fgs6xVgaAv2VYMCU485QXttyQ&s"
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
                    <Typography variant={isMobile?"h6":"h3"}>{title}</Typography>
                    <Typography fontSize={isMobile?"10px":null} textAlign={"justify"}>{content}</Typography>
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
