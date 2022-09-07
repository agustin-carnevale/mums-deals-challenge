import { Box, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { Navbar } from "../ui";
import { SideMenu } from "../ui";

interface HomeLayoutProps {
  title: string;
  children?: React.ReactNode;
}

export const HomeLayout: FC<HomeLayoutProps> = ({ title, children }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          border: "1px solid #63605f",
        }}
      >
        <Typography variant="h4" component="h4">
          {title}
        </Typography>
      </Box>

      <Grid container>
        <Grid item xs={3} md={2}>
          <aside>
            <SideMenu />
          </aside>
        </Grid>
        <Grid item xs={9} md={10}>
          <nav>
            <Navbar />
          </nav>
          <main>{children}</main>
        </Grid>
      </Grid>
    </>
  );
};
