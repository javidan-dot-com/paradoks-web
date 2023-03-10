import { Box, Typography, useTheme } from "@mui/material";
import { TeamStyles } from "./Team.styles";
import Image from "next/image";

const Team = () => {
  const headingText = {
    brand: "Our team members: ",
  };
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        paddingRight: "4rem",
        paddingLeft: "4rem",
        height: "100vh",
        width: "100%",
        rowGap: "80px",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
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
          filter: "grayscale(100%)",
          columnGap: "20px",
          alignItems: "center",
          width: "fit-content",

          [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            width: "80%",
            columnGap: "0",
            // rowGap: "15px",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "226px",
            height: "300px",

            [theme.breakpoints.down("sm")]: {
              width: "100%",
              height: "400px",
              padding: "15px",
            },
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
            position: "relative",
            width: "340px",
            height: "476px",

            [theme.breakpoints.down("sm")]: {
              width: "100%",
              height: "400px",
              padding: "15px",
            },
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
            position: "relative",
            width: "200px",
            height: "271px",

            [theme.breakpoints.down("sm")]: {
              width: "100%",
              height: "400px",
              padding: "15px",
            },
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
            position: "relative",
            width: "220px",
            height: "446px",

            [theme.breakpoints.down("sm")]: {
              width: "100%",
              height: "400px",
              padding: "15px",
            },
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
            position: "relative",
            width: "200px",
            height: "271px",

            [theme.breakpoints.down("sm")]: {
              width: "100%",
              height: "400px",
              padding: "15px",
            },
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
