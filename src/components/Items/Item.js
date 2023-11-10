import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ context }) => {
  return (
    <Grid item key={context.id} xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component={Link}
          to={`/detail/${context.id}`}
          sx={{
            // 16:9
            pt: "100%",
          }}
          image={context.image}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6">
            <a
              style={{
                textDecoration: "none",
                borderBottom: "none",
                color: "black",
                fontWeight: "bold",
              }}
              href={`/detail/${context.id}`}
            >
              {context.name}
            </a>
          </Typography>
          <Typography variant="h7">
            <strong>DateOfBirth:</strong> {context.dateofbirth}
          </Typography>
          <br />
          <Typography variant="h7">
            <strong>Class:</strong> {context.class}
          </Typography>
          <br />
          <Typography variant="h7">
            <strong>Gender:</strong> {context.gender ? "Male" : "Female"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            to={`/detail/${context.id}`}
            size="large"
            variant="contained"
          >
            Detail
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
