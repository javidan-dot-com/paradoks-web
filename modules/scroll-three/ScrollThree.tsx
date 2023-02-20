import { Box, Typography } from "@mui/material";
import {
  ScrollThreeStyles,
  ScrollThreeContainerStyles,
} from "./ScrollThree.styles";
import Image from "next/image";

const ScrollThree = () => {
  const headingText = {
    brand: "Scroll Three ",
  };

  return (
    <Box sx={(theme) => ScrollThreeContainerStyles(theme)}>
      <Box sx={{ width: "fit-content" }}>
        <Typography
          variant="h6"
          component={"span"}
          sx={(theme) => ScrollThreeStyles(theme)}
        >
          {headingText.brand}
        </Typography>
      </Box>
      <Box>
        <Image
          src="/images/imageScrollThree.png"
          alt="Image Scroll Three"
          width={850}
          height={455}
        />
      </Box>
    </Box>
  );
};

export default ScrollThree;
