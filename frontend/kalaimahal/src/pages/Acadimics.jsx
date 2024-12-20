import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CampusCard } from "../css/components/HomeOurCampus.module.css";
import { TitleHook } from "../CustomHook/TitleHook";
import BigToSmallHeader from "../components/BigToSmallHeader";
import Bg from "../assets/images/banner.png"
import { useEffect, useState } from "react";
import axios from 'axios'
function Acadimics() {
  TitleHook("Acadimics")

  let [data ,setData]=useState([])
  useEffect(
    ()=>{
      axios.get("/api/v2/kalaimahal/sembanarkiol/branch").then((d)=>setData(d.data.data))
    },[1]
  )
  let Branches = [...data]
  console.log(Branches);

  return (
    <div>
    <BigToSmallHeader backgroundImg={Bg} isAcitve={"/acadimics"} MainContent={"shvcvsc dkkvwhvc dwhvckhdvc"} SubContent={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus amet recusandae magnam et ipsa provident saepe tempora esse"}/>
    <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {Branches.map(({ name,description, image },index) => (
          <Card
            key={index}
            className={CampusCard}
            sx={{ height: "600px", margin: "40px", maxWidth: "400px" }}
          >
            <CardMedia
              component="img"
              title={name}
              alt={name}
              height="70%"
              src={`/static/image/${image}`}
              sx={{ objectFit: "fill" }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight={800} textAlign={"center"}>{name}</Typography>
              <Typography padding={"10px"} textAlign={"center"}>{description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default Acadimics;
