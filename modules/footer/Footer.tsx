import { Box, Typography, List, ListItem } from "@mui/material";
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

        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <List>
            <Box sx={{}}>
              <ListItem>
                <Image
                  priority
                  src="/assets/instagram.svg"
                  alt="Menu"
                  width={24}
                  height={24}
                />
              </ListItem>
            </Box>

            <Box>
              <ListItem>
                <Image
                  priority
                  src="/assets/tiktok.svg"
                  alt="Menu"
                  width={24}
                  height={24}
                />
              </ListItem>
            </Box>
            <Box>
              <ListItem>
                <Image
                  priority
                  src="/assets/youtube.svg"
                  alt="Menu"
                  width={24}
                  height={24}
                />
              </ListItem>
            </Box>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
