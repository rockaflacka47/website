import {
  Box,
  Card,
  CardContent,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { ReactDOM } from "react";

export default function Acro() {
  const itemData = [
    {
      img: "https://david-rocker-images.s3.eu-west-3.amazonaws.com/monoF2h_1.jpg",
      title: "Mono F2h",
    },

    {
      img: "https://david-rocker-images.s3.eu-west-3.amazonaws.com/backBend.jpg",
      title: "H2h Scorpion",
    },

    {
      img: "https://david-rocker-images.s3.eu-west-3.amazonaws.com/frontTuck.jpg",
      title: "Front Tuck",
    },
    {
      img: "https://david-rocker-images.s3.eu-west-3.amazonaws.com/2high.jpg",
      title: "Two High",
    },
    {
      img: "https://david-rocker-images.s3.eu-west-3.amazonaws.com/lightPainting.jpg",
      title: "Light Painting",
    },
    {
      img: "https://david-rocker-images.s3.eu-west-3.amazonaws.com/martini_1.jpg",
      title: "Martini",
    },

    {
      img: "https://david-rocker-images.s3.eu-west-3.amazonaws.com/extendedH2h.jpeg",
      title: "Extended",
    },
    {
      img: "https://david-rocker-images.s3.eu-west-3.amazonaws.com/courbette_1.jpg",
      title: "Corbette",
    },
    {
      img: "https://david-rocker-images.s3.eu-west-3.amazonaws.com/dragUp.jpg",
      title: "DragUp",
    },
  ];
  return (
    <div>
      <Card sx={{ display: "flex", mt: "5vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "auto",
            maxWidth: "60vw",
          }}
        >
          <CardContent>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              I have been practicing acro for about 7 years now and it is one of
              my biggest passions in life. I primarily practice icarian,
              standing, and group skills and would love to teach at more
              festivals. If you organize a festival or want me to attend a
              festival near you please let me know :).
            </Typography>
            <ImageList
              sx={{
                width: '60vw',
                margin: "auto",
                display: { md: "none", xs: "block" },
                mt: "3vh"
              }}
              cols={3}
              gap={4}
              //   rowHeight={164}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </CardContent>
        </Box>
        <ImageList
          sx={{
            width: 500,
            margin: "auto",
            display: { md: "block", xs: "none" },
          }}
          cols={3}
          gap={4}
          //   rowHeight={164}
          variant="masonry"
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Card>
    </div>
  );
}
