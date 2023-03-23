import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState("HOME");
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: { xs: "25px", lg: "7%" },
        }}
      >
        <Image
          src="/assets/shared/logo.svg"
          alt="Logo"
          width={50}
          height={50}
        />
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "37px",
          }}
        >
          <Link href="/">
            <Button
              onClick={() => setActive("HOME")}
              sx={{
                color: `${active === "HOME" ? "#FFFFFF" : "#D0D6F9"}`,
                fontSize: "21px",
              }}
            >
              HOME
            </Button>
          </Link>

          <Link href="/destination">
            <Button
              onClick={() => setActive("DESTINATION")}
              sx={{
                color: `${active === "DESTINATION" ? "#FFFFFF" : "#D0D6F9"}`,
                fontSize: "21px",
              }}
            >
              DESTINATION
            </Button>
          </Link>
          <Link href="/crew">
            <Button
              onClick={() => setActive("CREW")}
              sx={{
                color: `${active === "CREW" ? "#FFFFFF" : "#D0D6F9"}`,
                fontSize: "21px",
              }}
            >
              CREW
            </Button>
          </Link>
          <Link href="/technology">
            <Button
              onClick={() => setActive("TECHNOLOGY")}
              sx={{
                color: `${active === "TECHNOLOGY" ? "#FFFFFF" : "#D0D6F9"}`,
                fontSize: "21px",
              }}
            >
              TECHNOLOGY
            </Button>
          </Link>
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
          <Link href="/">
            <Button
              variant="p"
              sx={{
                color: "#FFFFFF",
              }}
            >
              00 HOME
            </Button>
          </Link>
          <Link href="/destination">
            <Button
              variant="p"
              sx={{
                color: "#FFFFFF",
              }}
            >
              01 DESTINATION
            </Button>
          </Link>
          <Link href="/crew">
            <Button
              variant="p"
              sx={{
                color: "#FFFFFF",
              }}
            >
              02 CREW
            </Button>
          </Link>
          <Link href="/technology">
            <Button
              variant="p"
              sx={{
                color: "#FFFFFF",
              }}
            >
              03 TECHNOLOGY
            </Button>
          </Link>
        </Box>
      ) : null}
    </>
  );
}
