import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import { ReactDOM } from "react";

import { Instagram, GitHub, LinkedIn } from "@mui/icons-material";

export function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" justifyContent="center">
      <Grid container spacing={0} justifyContent="center" marginTop="2vh">
        <Grid xs={.5}>
          <Link href="https://www.instagram.com/rockaflacka/">
            <Instagram />
          </Link>
        </Grid>
        <Grid xs={0.5}>
          <Link href="https://github.com/rockaflacka47/">
            <GitHub />
          </Link>
        </Grid>
        <Grid xs={.5}>
          <Link href="https://www.linkedin.com/in/david-rocker-505793137/">
            <LinkedIn />
          </Link>
        </Grid>
      </Grid>
      {"Copyright © "}
      <Link color="inherit" href="https://david-rocker.com/">
        david-rocker.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
