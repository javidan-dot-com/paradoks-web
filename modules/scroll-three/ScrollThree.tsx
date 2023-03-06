import { Box, Typography } from "@mui/material";
import {
  ScrollThreeStyles,
  ScrollThreeContainerStyles,
} from "./ScrollThree.styles";
import Image from "next/image";

const ScrollThree = () => {
  // const headingText = {
  //   brand: "Scroll Three ",
  // };

  return (
    <Box sx={(theme) => ScrollThreeContainerStyles(theme)}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/imageScrollThree.png"
          alt="Image Scroll Three"
          width={700}
          height={394}
        />
      </Box>
    </Box>
  );
};

export default ScrollThree;
