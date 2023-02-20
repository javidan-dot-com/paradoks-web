import { Box, Typography } from "@mui/material";
import { FooterStyles, FooterContainerStyles } from "./Footer.styles";
import Image from "next/image";

const Footer = () => {
  const headingText = {
    brand: "© 2023 Paradoks ",
  };

  return (
    <Box sx={(theme) => FooterContainerStyles(theme)}>
      <Box sx={{ width: "fit-content" }}>
        <Typography
          variant="h6"
          component={"span"}
          sx={(theme) => FooterStyles(theme)}
        >
          {headingText.brand}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
