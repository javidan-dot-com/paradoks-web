import { Box, Typography } from "@mui/material";
import { ScrollTwoStyles, ScrollTwoContainerStyles } from "./ScrollTwo.styles";
import Image from "next/image";

const ScrollTwo = () => {
  const headingText = {
    information: "Ölkələr haqqında həmin ölkənin vətəndaşlarından öyrənin",
  };

  return (
    <Box sx={(theme) => ScrollTwoContainerStyles(theme)}>
      <Box
        component="span"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          width: 1080,
          hight: 1920,
          color: "white",
        }}
      ></Box>
    </Box>
  );
};

export default ScrollTwo;
