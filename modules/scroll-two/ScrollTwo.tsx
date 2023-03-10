import { Box, Typography, useTheme } from "@mui/material";
import { ScrollTwoStyles, ScrollTwoContainerStyles } from "./ScrollTwo.styles";
import Image from "next/image";

const ScrollTwo = () => {
  const headingText = {
    information: "Ölkələr haqqında həmin ölkənin vətəndaşlarından öyrənin",
  };

  return (
    <Box sx={(theme) => ScrollTwoContainerStyles(theme)}>
      <Box
        sx={{
          width: "300px",
          height: "534px",
          color: "red",
          padding: "10px",
        }}
      ></Box>
    </Box>
  );
};

export default ScrollTwo;
