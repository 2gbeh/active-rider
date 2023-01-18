import * as React from "react";
import Box from "@mui/material/Box";

import { HeaderComponent, AsideComponent, FooterComponent } from "../";

import styles from "../../styles/sass/Host.module.scss";

const Host = ({ children }) => {
  return (
    <div className={styles["host"]}>
      <Box sx={{ display: "flex" }}>
        <HeaderComponent />

        <AsideComponent />

        {children}

        <FooterComponent/>
      </Box>
    </div>
  );
};

export default Host;
