import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { theme } from "./Theme";
import BannerImage from "../assets/images/banner.jpg";

const Banner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "80px", xs: "40px" },
        pl: { lg: "100px", sm: "80px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography
        theme={theme}
        color="primary"
        fontWeight="600"
        fontSize="26px"
        sx={{ mt: { lg: "0", sm: "100px" } }}
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "35px" } }}
        mb="5px"
        mt="30px"
      >
        Bee Stronger
      </Typography>
      <Typography sx={{ fontSize: { lg: "30px", xs: "18px" } }} mb={3}>
        Than Your Excuses
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
      <img src={BannerImage} alt="banner" className="banner-img" />
    </Box>
  );
};

export default Banner;
