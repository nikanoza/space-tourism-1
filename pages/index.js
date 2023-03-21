import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box } from "@mui/system";
import Header from "@/components/Header";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundImage: {
          xs: `url('/assets/home/background-home-mobile.jpg')`,
          lg: `url('/assets/home/background-home-desktop.jpg')`,
        },
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        paddingBottom: "15%",
      }}
    >
      <Header />
      <Box
        sx={{
          display: { lg: "flex" },
        }}
      >
        <Box
          sx={{
            textAlign: { xs: "center", lg: "left" },
            marginTop: "10px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: { xs: `7% 27%`, lg: "10%" },
            width: { lg: "50%" },
          }}
        >
          <Typography
            variant="p"
            sx={{
              color: "#D0D6F9",
              letterSpacing: "2.7px",
              fontSize: { md: "20px" },
            }}
          >
            SO, YOU WANT TO TRAVEL TO
          </Typography>
          <Typography
            variant="h1"
            sx={{ color: "#FFFFFF", fontSize: { xs: "80px", md: "150px" } }}
          >
            SPACE
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#D0D6F9",
              lineHeight: "25px",
              fontSize: { md: "16px" },
            }}
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            width: { xs: "150px", md: "242px" },
            height: { xs: "150px", md: "242px" },
            borderRadius: "100%",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: { xs: "20%", md: "7%" },
          }}
        >
          <Typography
            variant="p"
            sx={{
              color: "#0B0D17",
              letterSpacing: "2.7px",
              fontSize: { md: "32px" },
            }}
          >
            EXPLORE
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
