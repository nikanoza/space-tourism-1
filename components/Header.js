import { Box, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "25px",
        }}
      >
        <Image
          src="/assets/shared/logo.svg"
          alt="Logo"
          width={40}
          height={40}
        />
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "37px",
          }}
        >
          <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
            HOME
          </Typography>
          <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
            DESTINATION
          </Typography>
          <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
            CREW
          </Typography>
          <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
            TECHNOLOGY
          </Typography>
        </Box>
        <Box
          onClick={handleClick}
          component="img"
          sx={{
            height: 21,
            width: 25,
            margin: "auto 0",
            display: { xs: "block", md: "none" },
          }}
          src={
            nav
              ? `/assets/shared/icon-close.svg`
              : `/assets/shared/icon-hamburger.svg`
          }
        />
      </Box>
      {nav ? (
        <Box
          sx={{
            position: "absolute",
            right: "0",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            height: "100%",
            background: `rgba(255, 255, 255, 0.04)`,
            backdropFilter: `blur(40.7742px)`,
            padding: "32px",
          }}
        >
          <Typography
            variant="p"
            sx={{
              color: "#FFFFFF",
            }}
          >
            00 HOME
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#FFFFFF",
            }}
          >
            01 DESTINATION
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#FFFFFF",
            }}
          >
            02 CREW
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#FFFFFF",
            }}
          >
            03 TECHNOLOGY
          </Typography>
        </Box>
      ) : null}
    </>
  );
}
