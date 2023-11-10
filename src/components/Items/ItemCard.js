import { Box, CardContent, Typography } from "@mui/material";
import React from "react";

const ItemCard = ({ Detail }) => {
  return (
    <CardContent>
      <Typography variant="h4" component="h2" className="product-title">
        Name: {Detail.name}
      </Typography>
      <Box className="product-detail">
        <Typography variant="h5" component="h3">
          Date Of Birth: {Detail.gender ? "Male" : "Female"}
        </Typography>
        <Typography variant="body1">{Detail.description}</Typography>
        <Typography variant="h5" component="h3">
          Class: {Detail.class}
        </Typography>
        <br />
        <Typography variant="h7">
          <strong>FeedBack: </strong> {Detail.feedback} !
        </Typography>
      </Box>
    </CardContent>
  );
};

export default ItemCard;
