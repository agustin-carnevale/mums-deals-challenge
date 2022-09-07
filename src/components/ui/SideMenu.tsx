import { FC, useContext, useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Typography,
} from "@mui/material";
import { ProductsContext } from "../../context";

export const SideMenu: FC = () => {
  const { categories, filterCategories } = useContext(ProductsContext);
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);

  const onCheckCategory = (category: string) => {
    let checked;
    if (checkedCategories.includes(category)) {
      checked = checkedCategories.filter((c) => c !== category);
    } else {
      checked = [...checkedCategories, category];
    }
    setCheckedCategories(checked);
    filterCategories(checked);
  };

  return (
    <Box sx={{ paddingTop: 5, height: "100vh", border: "1px solid #63605f" }}>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Typography variant="h6">Filter Results</Typography>
      </Box>

      <FormGroup sx={{ padding: "20px" }}>
        <FormLabel>Product Type:</FormLabel>

        {categories.map((category) => (
          <FormControlLabel
            key={category}
            control={
              <Checkbox checked={checkedCategories.includes(category)} />
            }
            label={category}
            onChange={() => onCheckCategory(category)}
          />
        ))}
      </FormGroup>
    </Box>
  );
};
