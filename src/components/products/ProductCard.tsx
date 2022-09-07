import { FC } from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Product } from "../../interfaces";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <Card>
        <CardMedia
          component="img"
          image={product.image.src}
          alt={product.title}
          height="160"
          width="160"
        />
      </Card>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h6">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {product.product_type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sold: {product.quantitySold}
        </Typography>
      </CardContent>
    </Grid>
  );
};
