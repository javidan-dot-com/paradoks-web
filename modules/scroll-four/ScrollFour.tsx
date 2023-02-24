import { Box, Typography } from "@mui/material";
import {
  ScrollFourStyles,
  ScrollFourContainerStyles,
} from "./ScrollFour.styles";
import Image from "next/image";

const ScrollFour = () => {
  const headingText = {
    brand: "Scroll Four ",
  };

  return (
    <Box sx={(theme) => ScrollFourContainerStyles(theme)}>
      <Box sx={{ width: "fit-content" }}>
        <Typography
          variant="h6"
          component={"span"}
          sx={(theme) => ScrollFourStyles(theme)}
        >
          {headingText.brand}
        </Typography>
      </Box>
      <Box>
        <Image
          src="/images/imageScrollFour.png"
          alt="Image Scroll Four"
          width={550}
          height={555}
        />
      </Box>
    </Box>
  );
};

export default ScrollFour;
