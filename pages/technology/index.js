import Header from "@/components/Header";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import data from "../../data.json";

export default function Technology() {
  const [technologyIndex, setTechnologyIndex] = useState(0);
  const technology = data.technology[technologyIndex];
  console.log(data.technology);
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
        03 SPACE LAUNCH 101
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
              display: "flex",
              margin: "auto",
              marginTop: { xs: "5%", lg: "0" },
            }}
            src={technology.images.landscape}
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
              paddingLeft: { lg: "15%" },
            }}
          >
            <Box
              component="button"
              onClick={() => setTechnologyIndex(0)}
              sx={{
                width: "40px",
                height: "40px",
                backgroundColor: "#FFFFFF",
                opacity: `${technologyIndex === 0 ? "1" : "0.17"}`,
                borderRadius: "100%",
              }}
            >
              1
            </Box>
            <Box
              component="button"
              onClick={() => setTechnologyIndex(1)}
              sx={{
                width: "40px",
                height: "40px",
                backgroundColor: "#FFFFFF",
                opacity: `${technologyIndex === 1 ? "1" : "0.17"}`,
                borderRadius: "100%",
              }}
            >
              2
            </Box>
            <Box
              component="button"
              onClick={() => setTechnologyIndex(2)}
              sx={{
                width: "40px",
                height: "40px",
                backgroundColor: "#FFFFFF",
                opacity: `${technologyIndex === 2 ? "1" : "0.17"}`,
                borderRadius: "100%",
              }}
            >
              3
            </Box>
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
              THE TERMINOLOGY…
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFF",
                textTransform: "uppercase",
                fontSize: "24px",
              }}
            >
              {technology.name}
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "15px",
              }}
            >
              {technology.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
