import { Box, Typography, useTheme } from "@mui/material";
import {
  ScrollFourStyles,
  ScrollFourContainerStyles,
} from "./ScrollFour.styles";
import Image from "next/image";

const ScrollFour = () => {
  const headingText = {
    brand: "Məlumatların vizual qrafiklərlə çatdırılması ",
  };

  const theme = useTheme();

  return (
    <Box sx={(theme) => ScrollFourContainerStyles(theme)}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          // margin: "15px",
          // padding: "25px",
        }}
      >
        <Typography
          variant="h6"
          component={"span"}
          sx={(theme) => ScrollFourStyles(theme)}
        >
          {headingText.brand}
        </Typography>
      </Box>

      {/* ///////// */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "20px",

          [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
            width: "980px",
            padding: "20px",
            // height: "1920px",
          },
        }}
      >
        <Box
          sx={{
            width: "250px",
            height: "444px",
            backgroundColor: "#a7bcb9",
          }}
        ></Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "20px",

            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection: "column",
              width: "980px",
              padding: "20px",
              // height: "1920px",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "309px",
              height: "550px",
              backgroundColor: "#24527a",
            }}
          ></Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection: "column",
              width: "980px",
              padding: "20px",
              // height: "1920px",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "250px",
              height: "444px",
              backgroundColor: "#a7bcb9",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ScrollFour;
