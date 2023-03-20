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
          textAlign: "center",
          marginTop: "10px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Typography
          variant="p"
          sx={{ color: "#D0D6F9", letterSpacing: "2.7px" }}
        >
          SO, YOU WANT TO TRAVEL TO
        </Typography>
        <Typography variant="h1" sx={{ color: "#FFFFFF", fontSize: "80px" }}>
          SPACE
        </Typography>
        <Typography variant="p" sx={{ color: "#D0D6F9", lineHeight: "25px" }}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          width: "150px",
          height: "150px",
          borderRadius: "100%",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20%",
        }}
      >
        <Typography
          variant="p"
          sx={{ color: "#0B0D17", letterSpacing: "2.7px" }}
        >
          EXPLORE
        </Typography>
      </Box>
    </Box>
  );
}
