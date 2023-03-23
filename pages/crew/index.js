import Header from "@/components/Header";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import data from "../../data.json";

export default function index() {
  const [crewIndex, setCrewIndex] = useState(0);
  const crew = data.crew[crewIndex];
  return (
    <Box
      sx={{
        backgroundColor: "#0B0D17",
      }}
    >
      <Header />
      <Typography
        variant="h5"
        sx={{
          color: "#FFFFFF",
          textAlign: { xs: "center", md: "left" },
          paddingLeft: { md: "30px", lg: "15%" },
          marginTop: { md: "5%" },
        }}
      >
        02 MEET YOUR CREW
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Box
          sx={{
            order: { md: "2" },
            width: { lg: "50%" },
          }}
        >
          <Box
            component="img"
            sx={{
              width: { xs: "50%", lg: "100%" },
              display: "flex",
              margin: "auto",
              marginTop: { xs: "5%", lg: "0" },
            }}
            src={crew.images.png}
          ></Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            textAlign: { xs: "center", lg: "left" },
            padding: "5%",
            order: { md: "1" },
          }}
        >
          <Box
            sx={{
              margin: "6% 0 6% 0",
              display: "flex",
              gap: "16px",
              justifyContent: { xs: "center", lg: "left" },
              order: { md: "2" },
              paddingLeft: "15%",
            }}
          >
            <Box
              component="button"
              onClick={() => setCrewIndex(0)}
              sx={{
                width: "15px",
                height: "15px",
                backgroundColor: "#FFFFFF",
                opacity: `${crewIndex === 0 ? "1" : "0.17"}`,
                borderRadius: "100%",
              }}
            ></Box>
            <Box
              component="button"
              onClick={() => setCrewIndex(1)}
              sx={{
                width: "15px",
                height: "15px",
                backgroundColor: "#FFFFFF",
                opacity: `${crewIndex === 1 ? "1" : "0.17"}`,
                borderRadius: "100%",
              }}
            ></Box>
            <Box
              component="button"
              onClick={() => setCrewIndex(2)}
              sx={{
                width: "15px",
                height: "15px",
                backgroundColor: "#FFFFFF",
                opacity: `${crewIndex === 2 ? "1" : "0.17"}`,
                borderRadius: "100%",
              }}
            ></Box>
            <Box
              component="button"
              onClick={() => setCrewIndex(3)}
              sx={{
                width: "15px",
                height: "15px",
                backgroundColor: "#FFFFFF",
                opacity: `${crewIndex === 3 ? "1" : "0.17"}`,
                borderRadius: "100%",
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              order: { md: "1" },
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "0 15% 0 15%",
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                opacity: "0.5",
                textTransform: "uppercase",
                fontSize: "16px",
              }}
            >
              {crew.role}
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFF",
                textTransform: "uppercase",
                fontSize: "24px",
              }}
            >
              {crew.name}
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "15px",
              }}
            >
              {crew.bio}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
