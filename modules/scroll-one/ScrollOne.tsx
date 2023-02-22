import { Box, Typography } from "@mui/material";
import { ScrollOneStyles, ScrollOneContainerStyles } from "./ScrollOne.styles";
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
        sx={{
          position: "absolute",
          width: "725px",
          height: "82px",
          left: "357.5px",
          top: "256px",
        }}
      >
        <Typography
          variant="h6"
          component={"span"}
          sx={(theme) => ScrollOneStyles(theme)}
        >
          {headingText.brand}
          <Typography variant="h6">{headingText.slogan}</Typography>
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "flex-end",

          border: "1px solid white",

          width: "651.5px",
          height: "159.5px",
          left: "-0.5px",
          top: "200px",
          backgroundColor: "white",
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
  );
};

export default ScrollOne;
