import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../contexts/Context";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";
import ItemCard from "../components/Items/ItemCard";

export const Detail = () => {
  const { id } = useParams();
  const { products } = useContext(Context);

  const Detail = products.find((obj) => {
    return obj.id === id;
  });
  if (!Detail) {
    return (
      <section className="s-screen flex justify-center items-center">
        Loading....
      </section>
    );
  }

  return (
    <Box className="detail-staff">
      <Box className="card-wrapper">
        <Card className="card">
          <Box className="img-display">
            <Box className="img-showcase">
              <CardMedia
                component="img"
                alt="shoe image"
                height="800"
                width="500"
                image={Detail.image}
              />
            </Box>
          </Box>
          <Box className="product-imgs">
            <ItemCard Detail={Detail} />
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
