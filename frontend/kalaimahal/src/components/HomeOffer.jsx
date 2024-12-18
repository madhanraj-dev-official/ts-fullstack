import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Offer, OfferCard } from "../css/components/HomeOffer.module.css";
function HomeOffer() {
  const Course = [
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
    {
      title: "11-12",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam reiciendis tempore dicta molestiae repellat vero qui aut numquam magni architecto officiis nulla, it",
    },
  ];
  console.log(Course);
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
          {Course.map(({ title, content },index) => (
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
                  <Typography variant="h3">{title}</Typography>
                  <Typography textAlign={"justify"}>{content}</Typography>
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
