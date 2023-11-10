import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Context } from "../contexts/Context";
import { Title } from "../components/Header/Title";
import { Item } from "../components/Items/Item";
import { CircularProgress } from "@mui/material";
const defaultTheme = createTheme();
export const Home = () => {
  const { products } = React.useContext(Context);

  if (products?.length <= 0) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", height: "600px" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Title title="Students List" />
          </Container>
        </Box>
        <Container maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {products.map((context) => (
              <Item context={context} />
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};
