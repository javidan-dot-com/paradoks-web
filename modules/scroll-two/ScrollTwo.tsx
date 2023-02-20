import { Box, Typography } from "@mui/material";
import { ScrollTwoStyles, ScrollTwoContainerStyles } from "./ScrollTwo.styles";
import Image from "next/image";

const ScrollTwo = () => {
  const headingText = {
    brand: "Ölkələr haqqında həmin ölkənin vətəndaşlarından öyrənin",
  };

  return (
    <Box sx={(theme) => ScrollTwoContainerStyles(theme)}>
      <Box sx={{ width: "fit-content" }}>
        <Typography
          variant="h5"
          component={"span"}
          whiteSpace={"pre-line"}
          sx={(theme) => ScrollTwoStyles(theme)}
        >
          {headingText.brand}
        </Typography>
        <Image
          src="/images/imageScrollTwo.png"
          alt="Image Scroll Two"
          width={300}
          height={385}
        />
      </Box>
    </Box>
  );
};

export default ScrollTwo;
