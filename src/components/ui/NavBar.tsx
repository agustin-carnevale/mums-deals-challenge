import { FC, useContext } from "react";
import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import { FormatListBulleted, GridView } from "@mui/icons-material";
import { ProductsContext } from "../../context";
import { Display } from "../../interfaces";

interface NavBarProps {}

export const Navbar: FC<NavBarProps> = (props) => {
  const { filteredResults, setDisplay } = useContext(ProductsContext);

  return (
    <Toolbar sx={{ border: "1px solid #63605f" }}>
      <Typography variant="h6">
        Available Deals: {filteredResults.length}{" "}
      </Typography>

      <Box flex={1} />

      <Box>
        <IconButton onClick={() => setDisplay(Display.Grid)}>
          <GridView />
        </IconButton>
        <IconButton onClick={() => setDisplay(Display.List)}>
          <FormatListBulleted />
        </IconButton>
      </Box>
    </Toolbar>
  );
};
