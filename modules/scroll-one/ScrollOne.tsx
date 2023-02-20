import { Box, Typography } from "@mui/material";
import { ScrollOneStyles, ScrollOneContainerStyles } from "./ScrollOne.styles";
import Image from "next/image";

const ScrollOne = () => {
  const headingText = {
    brand: "paradoks, ",
    slogan: "dünyaya fərqli perspektivdən baxan bir platforma",
  };

  return (
    <Box sx={(theme) => ScrollOneContainerStyles(theme)}>
      <Box sx={{ width: "fit-content", backgroundColor: "yellow" }}>
        <Typography
          variant="h6"
          component={"span"}
          sx={(theme) => ScrollOneStyles(theme)}
        >
          {headingText.brand}
          <Typography variant="h6">{headingText.slogan}</Typography>
        </Typography>
      </Box>
      <Box>
        <Image
          src="/images/imageScrollOne.png"
          alt="Image Scroll One"
          width={933}
          height={705}
        />
      </Box>
    </Box>
  );
};

export default ScrollOne;
