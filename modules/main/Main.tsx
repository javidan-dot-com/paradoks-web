
import { Typography } from "@mui/material";
import styles from "./main.module.css";

function Main() {

  const headingText = {
    brand: "paradoks, ",
    slogan: "dünyaya fərqli perspektivdən baxan bir platforma",
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.main1}>
          {
            <>
              <Typography
                variant="h5"
              >
                <Typography component={"span"} variant="h5" sx={{
                  fontWeight: 700,
                }}>
                  {headingText.brand}
                </Typography>
                {headingText.slogan}
              </Typography>
            </>
          }
        </div>
        <div className={styles.main2}></div>
        <div className={styles.main3}></div>
        <div className={styles.main4}></div>
        <div className={styles.main5}></div>
        <div className={styles.main6}></div>
      </div>
    </>
  );
}

export default Main;
