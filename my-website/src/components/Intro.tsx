import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: 194,
  height: 194,
  justifyContent: "center",
  alignItems: "center",
}));

export default function Intro() {
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Hello! My name is David Rocker. I am an acrobat and a freelance
            software engineer that enjoys pushing myself and trying to learn
            something new every day. Welcome to my website and if you have
            questions or business inquiries please contact me at drocker3738
            (at) gmail (dot) com.
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 251 }}
        image="src/assets/messagingService.png"
        alt="David Rocker"
      />
    </Card>
  );
}
