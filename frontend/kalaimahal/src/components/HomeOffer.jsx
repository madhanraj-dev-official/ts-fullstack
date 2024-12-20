import { Box, Card, CardContent, Typography } from "@mui/material";
import { Offer, OfferCard } from "../css/components/HomeOffer.module.css";
import { useEffect, useState } from "react";
import axios from 'axios'

function HomeOffer() {
  let [data ,setData]=useState([])
  useEffect(
    ()=>{
      axios.get("/api/v2/kalaimahal/sembanarkiol/course").then((d)=>setData(d.data.data))
    },[1]
  )
  let Course = [...data]
  return (
    <>
      <Box className={Offer} component={"section"}>
        <Typography component={"p"} variant="h3">
          Courses We Offer
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
          {Course.map(({ name, description },index) => (
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
    </>
  );
}

export default HomeOffer;
