import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { theme } from "./Theme";
import BannerImage from "../assets/images/banner.jpg";

const Banner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography theme={theme} color="primary" fontWeight="600" fontSize="26px">
        Fitnes Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={5}>
        Check out the most effective exercises
      </Typography>
      <Button
        theme={theme}
        variant="contained"
        color="primary"
        href="#exercises"
        sx={{ padding: "12px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontSize="200px"
        fontWeight={600}
        color="#9B560B"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
      >
        Exercise
      </Typography>
      <img src={BannerImage} alt="banner" className="banner-img" />
    </Box>
  );
};

export default Banner;
