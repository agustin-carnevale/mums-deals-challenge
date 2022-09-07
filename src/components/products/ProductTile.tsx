import {
  Box,
  Divider,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Product } from "../../interfaces";

interface ProductTileProps {
  product: Product;
}

export const ProductTile: FC<ProductTileProps> = ({ product }) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar sx={{ mr: 3 }}>
          <img
            src={product.image.src}
            alt={product.title}
            loading="lazy"
            height={140}
            width={140}
          />
        </ListItemAvatar>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontSize: "18px", fontWeight: "bold" }}
          >
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "18px" }}>
            Category: {product.product_type}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "18px" }}>
            Sold: {product.quantitySold}
          </Typography>
        </Box>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};
