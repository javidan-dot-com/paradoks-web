import { Box, Typography } from "@mui/material";
import { TeamStyles, TeamContainerStyles } from "./Team.styles";
import Image from "next/image";

const Team = () => {
  const headingText = {
    brand: "Our team memebers: ",
  };

  return (
    <Box sx={(theme) => TeamContainerStyles(theme)}>
      <Box sx={{ width: "fit-content" }}>
        <Typography
          variant="h6"
          component={"span"}
          sx={(theme) => TeamStyles(theme)}
        >
          {headingText.brand}
        </Typography>
      </Box>
      <Box>
        <Image src="/images/team.png" alt="Team" width={333} height={400} />
      </Box>
    </Box>
  );
};

export default Team;
