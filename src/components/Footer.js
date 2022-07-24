import React from "react";
import { Box, Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#ddd">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px" pb="24px">
        <img src={Logo} alt="logo" />
      </Stack>
    </Box>
  );
};

export default Footer;
