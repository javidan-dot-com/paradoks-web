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
        sx={{
          width: "1080px",
          height: "1500px",
          left: "251px",
          top: "895px",
          position: "absolute",
        }}
      >
        <Image src="/images/earth.png" alt="Earth" width={800} height={800} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", height: "20px" }}>
        <Box
          sx={{
            position: "relative",
            top: "97px",
            left: "104px",
            width: "479px",
            height: "295px",
            backgroundColor: "white",
            border: "1px solid black",
            clipPath:
              "polygon(0% 0%, 64% 0, 64% 32%, 93% 33%, 64% 51%, 64% 69%, 0 70%)",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "256px",
              height: "110px",
              top: "55px",
              left: "21px",
            }}
          >
            <Typography
              variant="h6"
              component={"span"}
              sx={(theme) => ScrollTwoStyles(theme)}
            >
              {headingText.information}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Image
            src="/images/imageScrollTwo.png"
            alt="Image Scroll Two"
            width={380}
            height={590}
          />

          <Typography
            sx={{ fontWeight: "600", color: "black", fontSize: "26px" }}
          >
            Rasmus Kalep{" "}
          </Typography>
          <Typography
            sx={{ fontWeight: "300", color: "black", fontSize: "20px" }}
          >
            Estoniya
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ScrollTwo;
