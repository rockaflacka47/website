import { Link, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { ReactDOM } from "react";

import { Instagram, GitHub, LinkedIn } from "@mui/icons-material";

export function Copyright() {
  return (
    <div>
      <Grid2 container spacing={0} justifyContent="center" marginTop="2vh">
        <Grid2 xs={2} md={0.5}>
          <Link href="https://www.instagram.com/rockaflacka/" target="_blank">
            <Instagram />
          </Link>
        </Grid2>
        <Grid2 xs={2} md={0.5}>
          <Link href="https://github.com/rockaflacka47/" target="_blank">
            <GitHub />
          </Link>
        </Grid2>
        <Grid2 xs={2} md={0.5}>
          <Link href="https://www.linkedin.com/in/david-rocker-505793137/" target="_blank">
            <LinkedIn />
          </Link>
        </Grid2>
      </Grid2>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        justifyContent="center"
      >
        {"Copyright © "}
        <Link color="inherit" href="https://david-rocker.com/">
          david-rocker.com
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
}
