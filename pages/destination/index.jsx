import Header from "@/components/Header";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import data from "../../data.json";

export default function Destination() {
  const [name, setName] = useState("Moon");
  const filteredItem = data.destinations.find((item) => item.name === name);
  const clickHeandler = (item) => {
    setName(item);
  };

  return (
    <Box
      sx={{
        backgroundColor: " #0B0D17",
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
        01 PICK YOUR DESTINATION
      </Typography>
      <Box
        sx={{
          marginTop: "5%",
          display: { lg: "flex" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { lg: "40%" },
            padding: { lg: "5%" },
          }}
        >
          <Box
            component="img"
            sx={{
              margin: "auto",
              width: { xs: "50%", lg: "100%" },
            }}
            src={filteredItem.images.png}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: { xs: "30px", md: "80px" },
            width: { lg: "50%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              marginRight: { lg: "auto" },
            }}
          >
            {data.destinations.map((item) => (
              <Button
                key={item.name}
                sx={{
                  color: `${
                    item.name === filteredItem.name ? "#FFFFFF" : "#D0D6F9"
                  }`,
                  fontSize: "18px",
                  textTransform: "uppercase",
                }}
                onClick={() => clickHeandler(item.name)}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <Typography
            variant="h1"
            sx={{
              color: "#FFFFFF",
              textAlign: { xs: "center", lg: "left" },
              textTransform: "uppercase",
            }}
          >
            {filteredItem.name}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#D0D6F9",
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            {filteredItem.description}
          </Typography>
          <Box
            sx={{
              height: "1px",
              backgroundColor: "#383B4B",
              margin: "20px 0 20px 0",
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "20px", md: "10%" },
              alignItems: "center",
              justifyContent: { md: "center", lg: "left" },
              width: { md: "100%" },
            }}
          >
            <Box
              sx={{
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              <Typography
                variant="h7"
                sx={{
                  color: "#D0D6F9",
                }}
              >
                AVG. DISTANCE
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  color: "#FFFFFF",
                  marginTop: "12px",
                }}
              >
                {filteredItem.distance}
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                variant="h7"
                sx={{
                  color: "#D0D6F9",
                }}
              >
                Est. travel time
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "#FFFFFF",
                  marginTop: "12px",
                }}
              >
                {filteredItem.travel}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
