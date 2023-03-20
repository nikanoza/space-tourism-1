import { Box, CardMedia } from "@mui/material";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", padding: "25px" }}
    >
      <Image src="/assets/shared/logo.svg" alt="Logo" width={40} height={40} />
      <Box
        component="img"
        sx={{
          height: 21,
          width: 25,
          margin: "auto 0",
        }}
        src="/assets/shared/icon-hamburger.svg"
      />
    </Box>
  );
}
