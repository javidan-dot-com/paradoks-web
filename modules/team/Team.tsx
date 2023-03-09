import { Box, Typography, useTheme } from "@mui/material";
import { TeamStyles, TeamContainerStyles } from "./Team.styles";
import Image from "next/image";

const Team = () => {
  const headingText = {
    brand: "Our team members: ",
  };
  const theme = useTheme();
  return (
    <Box sx={(theme) => TeamContainerStyles(theme)}>
      <Box
        sx={{
          width: "fir-content",
        }}
      >
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
          justifyContent: "space-between",
          filter: "grayscale(100%)",
          gap: "20px",

          [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            width: "80%",
          },
        }}
      >
        <Box
          sx={{
            padding: "15px",
            position: "relative",
            top: "120px",
            width: "226px",
            height: "300px",
          }}
        >
          {" "}
          <Image
            src="/images/erkin.png"
            alt="Erkin"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>

        <Box
          sx={{
            padding: "15px",
            position: "relative",
            width: "340px",
            height: "476px",
          }}
        >
          <Image
            src="/images/team.png"
            alt="Team"
            layout="fill"
            objectFit="cover"
            objectPosition="right"
          />
        </Box>
        <Box
          sx={{
            backgroundSize: "cover",
            padding: "15px",
            position: "relative",
            top: "150px",
            width: "200px",
            height: "271px",
          }}
        >
          <Image
            src="/images/team2.png"
            alt="Team2"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
        <Box
          sx={{
            backgroundSize: "cover",
            padding: "15x",
            position: "relative",
            top: "50px",
            width: "220px",
            height: "446px",
          }}
        >
          <Image
            src="/images/team3.png"
            alt="Team3"
            fill={true}
            layout="fill"
            objectFit="cover"
          />
        </Box>

        <Box
          sx={{
            backgroundSize: "cover",
            position: "relative",
            top: "130px",
            width: "200px",
            height: "271px",
          }}
        >
          <Image
            src="/images/nicat.png"
            alt="nicat"
            fill={true}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
