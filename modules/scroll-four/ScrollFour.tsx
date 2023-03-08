import { Box, Typography } from "@mui/material";
import {
  ScrollFourStyles,
  ScrollFourContainerStyles,
} from "./ScrollFour.styles";
import Image from "next/image";

const ScrollFour = () => {
  const headingText = {
    brand: "Məlumatların vizual qrafiklərlə çatdırılması ",
  };

  return (
    <Box sx={(theme) => ScrollFourContainerStyles(theme)}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "15px",
          padding: "25px",
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "100vh",
          width: "980px",
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
        <Box
          sx={{ width: "309px", height: "550px", backgroundColor: "#24527a" }}
        ></Box>
        <Box
          sx={{
            position: "relative",
            width: "250px",
            height: "444px",
            backgroundColor: "#5dacbd",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default ScrollFour;
