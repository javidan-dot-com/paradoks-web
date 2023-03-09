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
        <Box
          sx={{
            width: "470px",
          }}
        >
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
      </Box>

      <Box
        sx={{
          display: "flex",
          position: "relative",
          flexDirection: "row",
          width: "100%",
          height: "100vh",
          // padding: "20px",
          backgroundColor: "#C7F5FF",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "915px",
            height: "513px",
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
          <Box
            sx={{
              width: "100%",
              height: "140px",
              display: "flex",
              position: "absolute",
              justifyContent: "flex-end",
              alignItems: "center",
              backgroundColor: "red",
              bottom: "1px",
              top: "457px",
              right: "-77px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "541px",
                height: "137px",
                backgroundColor: "white",
                clipPath: "polygon(0 0, 100% 0, 100% 98%, 0 75%)",
                right: "0",
                left: "auto",
              }}
            >
              <Typography
                sx={{
                  width: "363px",
                  left: "50px",
                  height: "40px",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "24px",
                  bgColor: "white",
                  color: "black",
                  margin: "30px",
                  textAlign: "left",
                }}
              >
                {headingText.information}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    // </Box>
  );
};

export default ScrollOne;
