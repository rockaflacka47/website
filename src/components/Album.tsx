import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const cards = [
  {
    id: 1,
    title: "Messaging Service",
    description:
      "Built with React, Node, Express, Prisma, Socket-io, and MySQL this " +
      " web based messaging app simulates basic messaging functions. ",
    img: "/messagingService.png",
    link: "https://messagingservice.david-rocker.com"
  },
];



export default function Album() {
    const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 6,
            pb: 2,
          }}
        ></Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4} justifyContent='center'>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                  <Link href={card.link} underline="none" target="_blank">
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={card.img}
                    alt=""
                    height="194"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 4 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Notice
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          If the links provide a 502 and you want to see/play with them please contact me at drocker3738 (at) gmail (dot) com. 
          Most of the EC2s will be turned off while not in active development.
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
