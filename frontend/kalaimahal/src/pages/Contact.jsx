import React from "react";
import BigToSmallHeader from "../components/BigToSmallHeader";
import { Box } from "@mui/material";
import { TitleHook } from "../CustomHook/TitleHook";
import Bg from "../assets/images/banner2.jpg"

function Contact() {
  TitleHook("Contact")
  return (
    <div>
    <BigToSmallHeader backgroundImg={Bg} isAcitve={"/contact"} MainContent={"shvcvsc dkkvwhvc dwhvckhdvc"} SubContent={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus amet recusandae magnam et ipsa provident saepe tempora esse"}/>
    <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        marginY={"50px"}
      >
        <Box
          component={"iframe"}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.113744436199!2d79.72881517504666!3d11.104899889064495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5521dc802e28eb%3A0x5950aeb17496ccbb!2sKalaimahal%20Matriculation%20Higher%20Secondary%20School!5e0!3m2!1sen!2sin!4v1732271573804!5m2!1sen!2sin"
          width="90vw"
          height="70vh"
          border={"2px solid black"}
        />
      </Box>
    </div>
  );
}

export default Contact;
