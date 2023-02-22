import { Box, Typography } from "@mui/material";
import { ScrollOneStyles, ScrollOneContainerStyles, ScrollOneHeaderContainerStyles } from "./ScrollOne.styles";
import Image from "next/image";

const ScrollOne = () => {
  const headingText = {
    brand: "paradoks, ",
    slogan: "dünyaya fərqli perspektivdən baxan bir platforma",
    secondSlogan:
      "Fərqli ölkələrdən maraqlı  mövzular əsasında araşdırmalar və video materiallar",
  };

  return (
    <Box sx={(theme) => ScrollOneContainerStyles(theme)}>
      <Box
        sx={(theme) => ScrollOneHeaderContainerStyles(theme)}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "36px",
          }}
        >
          <Typography
            sx={
              (theme) => ScrollOneStyles(theme)
            }
            component="span"
          >
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
          border: "1px solid white",
          width: "100%",
          height: "100%",
          backgroundColor: "yellow",
          color: "white",
        }}
      >
        <Box>
          <Image
            src="/images/imageScrollOne.png"
            alt="Image Scroll One"
            width={915}
            height={513}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: "20px",
            right: "60px",
            width: "500px",
            height: "100px",
            backgroundColor: "white",
          }}
        >
          <Typography
            sx={{
              width: "473px",
              height: "87px",
              left: "calc(50% - 473px/2 - 3.5px)",
              top: "calc(50% - 87px/2)",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "19px",
              lineHeight: "29px",
              bgColor: "white",
              color: "black",
            }}
          >
            {headingText.secondSlogan}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ScrollOne;
