import { Box, Typography } from "@mui/material";
import { TeamStyles, TeamContainerStyles } from "./Team.styles";
import Image from "next/image";

const Team = () => {
  const headingText = {
    brand: "Our team members: ",
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "10px",
            filter: " grayscale(100%)",
          }}
        >
          <Box sx={{ padding: "15px", position: "relative", top: "120px" }}>
            {" "}
            <Image
              src="/images/erkin.png"
              alt="Erkin"
              width={226}
              height={300}
            />
          </Box>

          <Box sx={{ padding: "15px", position: "relative", left: "-6px" }}>
            <Image src="/images/team.png" alt="Team" width={333} height={476} />
          </Box>
          <Box
            sx={{
              padding: "15px",
              position: "relative",
              top: "150px",
              left: "-8px",
            }}
          >
            <Image
              src="/images/team2.png"
              alt="Team2"
              width={200}
              height={271}
            />
          </Box>
          <Box sx={{ padding: "15x", position: "relative", top: "50px" }}>
            <Image
              src="/images/team3.png"
              alt="Team3"
              width={166}
              height={446}
            />
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Team;
