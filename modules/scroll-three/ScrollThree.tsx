import { Box, Typography, useTheme } from "@mui/material";
import {
  ScrollThreeStyles,
  ScrollThreeContainerStyles,
} from "./ScrollThree.styles";
import Image from "next/image";

const ScrollThree = () => {
  // const headingText = {
  //   brand: "Scroll Three ",
  // };

  const theme = useTheme();
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
        <Box
          sx={{
            width: "700px",
            height: "394px",
            position: "relative",

            [theme.breakpoints.down("sm")]: {
              width: "400px",
              height: "200px",
            },
          }}
        >
          <Image
            src="/images/imageScrollThree.png"
            fill={true}
            alt="Image Scroll Three"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ScrollThree;
