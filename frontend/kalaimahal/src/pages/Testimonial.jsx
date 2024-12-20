import React, { useEffect, useState } from "react";
import { Box, Card, CardMedia } from "@mui/material";
import { CampusCard } from "../css/components/HomeOurCampus.module.css";
import BigToSmallHeader from "../components/BigToSmallHeader";
import Bg from "../assets/images/background.jpg"
import { TitleHook } from "../CustomHook/TitleHook";
import axios from "axios";

function Testimonial() {
  TitleHook("Testimonial")
  let [data ,setData]=useState([])
  useEffect(
    ()=>{
      axios.get("/api/v2/kalaimahal/sembanarkiol/kids?kid=false").then((d)=>setData(d.data.data))
    },[1]
  )
  let testimonial = [...data]

  return (
    <div>
    <BigToSmallHeader backgroundImg={Bg} isAcitve={"/testimonial"} MainContent={"shvcvsc dkkvwhvc dwhvckhdvc"} SubContent={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus amet recusandae magnam et ipsa provident saepe tempora esse"}/>
    <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {testimonial.map(({ name, image },index) => (
          <Card
          key={index}
            className={CampusCard}
            sx={{ height: "600px", margin: "40px", maxWidth: "400px" }}
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
        ))}
      </Box>
    </div>
  );
}

export default Testimonial;
