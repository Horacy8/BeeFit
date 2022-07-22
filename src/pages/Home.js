import React, { useState } from "react";
import { Box } from "@mui/system";
import Banner from "../components/Banner";
import SearchExercises from "../components/SearchExercises";

const Home = () => {
  return (
    <Box>
      <Banner />
      <SearchExercises />
    </Box>
  );
};

export default Home;
