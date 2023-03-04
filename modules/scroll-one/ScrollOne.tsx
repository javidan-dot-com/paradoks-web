import { Box, Typography, useTheme } from "@mui/material";
import {
  ScrollOneStyles,
  ScrollOneContainerStyles,
  ScrollOneHeaderContainerStyles,
} from "./ScrollOne.styles";
import Image from "next/image";

const ScrollOne = () => {
  const theme = useTheme();
  const headingText = {
    brand: "paradoks, ",
    slogan: "dünyaya fərqli perspektivdən baxan bir platforma",
    information:
      "Fərqli ölkələrdən maraqlı  mövzular əsasında araşdırmalar və video materiallar",
  };

  return (
    <Box sx={(theme) => ScrollOneContainerStyles(theme)}>
      <Box sx={(theme) => ScrollOneHeaderContainerStyles(theme)}>
        <Typography
          variant="h6"
          sx={{
            fontSize: "23px",
            color: "black",
          }}
        >
          <Typography sx={(theme) => ScrollOneStyles(theme)} component="span">
            {headingText.brand}
          </Typography>
          {headingText.slogan}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          position: "relative",
          justifyContent: "flex-start",
          flexDirection: "row",
          width: "100%",
          height: "100%",
          backgroundColor: "#C7F5FF",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "413px",
            position: "relative",

            [theme.breakpoints.down("sm")]: {
              width: "400px",
              height: "200px",
            },
          }}
        >
          <Image
            src="/images/imageScrollOne.png"
            fill={true}
            alt="Image Scroll One"
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: "1px",
            top: "357px",
            right: "104px",
            width: "100%",
            height: "149px",
            backgroundColor: "white",
            clipPath: "polygon(0 0, 100% 0, 100% 98%, 0 75%)",
          }}
        >
          <Typography
            sx={{
              width: "363px",
              left: "50px",
              height: "90px",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "24px",
              bgColor: "white",
              color: "black",
              margin: "40px",
              textAlign: "left",
            }}
          >
            {headingText.information}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ScrollOne;
