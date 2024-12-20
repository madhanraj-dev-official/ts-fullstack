import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { TitleHook } from "../CustomHook/TitleHook";
import { useForm, Controller } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import BigToSmallHeader from "../components/BigToSmallHeader";
import Bg from "../assets/images/background.jpg";
import axios from "axios";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

export default function Requirement() {
  TitleHook("Requirement");
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const reloadPage = () => {
    window.location.reload();
  };
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const [file, setFile] = useState({});
  const onSubmit = async (data) => {
    console.log(file);
    const formData = new FormData();
    formData.append("name", data.Name);
    formData.append("email", data.Email);
    formData.append("phone", data.Phone);
    formData.append("apply", data.Position);
    formData.append("experience", data.Experience);
    formData.append("interest1", data.Workplace1);
    formData.append("interest2", data.Workplace2);
    formData.append("resume", file);
    await axios.post("/api/v2/kalaimahal/sembanarkiol/requirement", formData);
    // await reloadPage()
  };
  const listStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
  };
  const textfieldStyle = {
    width: "70vw",
    marginTop: "2rem",
  };
  const isTablet = useMediaQuery({ query: "(max-width:1354px)" });
  const isMobile = useMediaQuery({ query: "(max-width:841px)" });
  return (
    <>
      <BigToSmallHeader
        backgroundImg={Bg}
        isAcitve={"/requirement"}
        MainContent={"shvcvsc dkkvwhvc dwhvckhdvc"}
        SubContent={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus amet recusandae magnam et ipsa provident saepe tempora esse"
        }
      />
      <Box
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        flexDirection={"column"}
        width={"100vw"}
      >
        <Typography variant="h2" component={"p"} margin={"2rem"}>
          Placement Registration Open for All
        </Typography>

        <Box
          component="form"
          encType="multipart/form-data"
          alignItems={"center"}
          justifyContent={"center"}
          display={"flex"}
          flexDirection={"column"}
          width={"100vw"}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="Name"
            control={control}
            defaultValue=""
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                sx={textfieldStyle}
                label="Name*"
                variant="outlined"
                {...field}
                error={!!errors.Name}
                helperText={errors.Name ? errors.Name.message : ""}
              />
            )}
          />
          <Controller
            name="Email"
            control={control}
            defaultValue=""
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                sx={textfieldStyle}
                {...field}
                label="Email*"
                variant="outlined"
                error={!!errors.Email}
                helperText={errors.Email ? errors.Email.message : ""}
              />
            )}
          />
          <Controller
            name="Phone"
            control={control}
            defaultValue=""
            rules={{ required: "Phone is required" }}
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                sx={textfieldStyle}
                {...field}
                label="Phone*"
                variant="outlined"
                error={!!errors.Phone}
                helperText={errors.Phone ? errors.Phone.message : ""}
              />
            )}
          />
          <Controller
            name="Position"
            control={control}
            defaultValue=""
            rules={{ required: "Apply For The Position  is required" }}
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                sx={textfieldStyle}
                {...field}
                label="Apply For The Position *"
                variant="outlined"
                error={!!errors.Position}
                helperText={errors.Position ? errors.Position.message : ""}
              />
            )}
          />
          <Controller
            name="Experience"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                sx={textfieldStyle}
                {...field}
                label="Total Year Experience"
                variant="outlined"
              />
            )}
          />
          <Controller
            name="Workplace1"
            control={control}
            defaultValue=""
            rules={{ required: "Interest in Workplace 1  is required" }}
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                sx={textfieldStyle}
                {...field}
                label="Interest in Workplace 1 *"
                variant="outlined"
                error={!!errors.Workplace1}
                helperText={errors.Workplace1 ? errors.Workplace1.message : ""}
              />
            )}
          />
          <Controller
            name="Workplace2"
            control={control}
            defaultValue=""
            rules={{ required: "Interest in Workplace 2 is required" }}
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                sx={textfieldStyle}
                {...field}
                label="Interest in Workplace 2*"
                variant="outlined"
                error={!!errors.Workplace2}
                helperText={errors.Workplace2 ? errors.Workplace2.message : ""}
              />
            )}
          />
          <Button
            component="label"
            role={undefined}
            startIcon={<CloudUploadIcon />}
            variant={"outlined"}
            sx={textfieldStyle}

          > Upload Resume
            <VisuallyHiddenInput
              id="outlined-basic"
              type="file"
              required
              accept=".pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={(e) => {
                setFile(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              variant="outlined"
            />{" "}
          </Button>
          <Button
            variant={"contained"}
            sx={{
              width: isMobile ? "25vw" : "20vw",
              height: "10vh",
              paddingX: "20px",
              fontSize: isMobile ? "0.8rem" : isTablet ? "1.5rem" : "2rem",
              margin: "3rem",
            }}
            className=""
            type="submit"
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}
