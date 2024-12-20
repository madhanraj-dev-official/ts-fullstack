import BigToSmallHeader from "../components/BigToSmallHeader";
import Bg from "../assets/images/basketball.png"
import { TitleHook } from '../CustomHook/TitleHook';
import { Box, Card, CardContent, Typography } from "@mui/material";
import { Offer, OfferCard } from "../css/components/HomeOffer.module.css";
import { useEffect, useState } from "react";
import axios from 'axios'

function Event() {
  TitleHook("Event")
  let [data ,setData]=useState([])
  useEffect(
    ()=>{
      axios.get("/api/v2/kalaimahal/sembanarkiol/event").then((d)=>setData(d.data.data))
    },[1]
  )
  let event = [...data]

  return (
    <div>
    <BigToSmallHeader backgroundImg={Bg} isAcitve={"/event"} MainContent={"shvcvsc dkkvwhvc dwhvckhdvc"} SubContent={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus amet recusandae magnam et ipsa provident saepe tempora esse"}/>
    <Box className={Offer} component={"section"}>
        <Typography component={"p"} variant="h3">
          Our Upcomming Events
        </Typography>
        <Typography>
          Lorem ipsum dolor,voluptate, ullam tempora repellat.
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          {event.map(({ name, description },index) => (
            <Card className={OfferCard} key={index}>
              <CardContent>
                <Box
                  display={"inline-flex"}
                  maxWidth={"29rem"}
                  padding={"20px"}
                  flexDirection={"column"}
                  flexWrap={"wrap"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Typography variant="h3">{name}</Typography>
                  <Typography textAlign={"justify"}>{description}</Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </div>
  )
}

export default Event