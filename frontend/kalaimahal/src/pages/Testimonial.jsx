import React from "react";
import { Box, Card, CardMedia } from "@mui/material";
import { CampusCard } from "../css/components/HomeOurCampus.module.css";
import BigToSmallHeader from "../components/BigToSmallHeader";
import Bg from "../assets/images/background.jpg"
import { TitleHook } from "../CustomHook/TitleHook";

function Testimonial() {
  TitleHook("Testimonial")
  const Branches = [
    {
      title: "classrooms",
      image:
        "https://www.teachhub.com/wp-content/uploads/2020/05/Classroom-Management-for-an-Effective-Learning-Environment-768x512.jpg",
    },
    {
      title: "libraries",
      image:
        "https://www.reganagency.com/wp-content/uploads/2023/10/Library-Management-1024x683.jpg",
    },
    {
      title: "laboratories",
      image:
        "https://evolveltd.eu/app/uploads/2020/01/255376950_439497967739323_1355680417886447892_n-1.jpg",
    },
    {
      title: "sports",
      image: "https://shikshaabhiyan.co.in/wp-content/uploads/2024/03/1.jpg",
    },
    {
      title: "medical room",
      image:
        "https://tws.edu.in/wp-content/uploads/2015/11/TWS_infrastructure_infirmaryImage02.jpg",
    },
    {
      title: "computer labs",
      image:
        "https://5.imimg.com/data5/DJ/PV/GLADMIN-64970456/computer-lab-class.png",
    },
  ];

  return (
    <div>
    <BigToSmallHeader backgroundImg={Bg} isAcitve={"/testimonial"} MainContent={"shvcvsc dkkvwhvc dwhvckhdvc"} SubContent={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus amet recusandae magnam et ipsa provident saepe tempora esse"}/>
    <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {Branches.map(({ title, image },index) => (
          <Card
          key={index}
            className={CampusCard}
            sx={{ height: "600px", margin: "40px", maxWidth: "400px" }}
          >
            <CardMedia
              component="img"
              title={title}
              alt="green iguana"
              height="100%"
              image={image}
              sx={{ objectFit: "fill" }}
            />
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default Testimonial;
