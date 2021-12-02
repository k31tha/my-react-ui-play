import React from "react";
import logo from "./logo.svg";
//import './App.css';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography, Checkbox } from "@mui/material";
import { orange, blue } from "@mui/material/colors";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  "&.Mui-checked": {
    color: theme.status.danger,
  },
}));

const theme = createTheme({
  palette: {
    primary: orange,
  },
  status: {
    danger: blue[500],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            width: 300,
            height: 300,
            bgcolor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Typography variant="h1" component="h3" mt={5}>
            h1. Heading
          </Typography>
        </Box>
        <CustomCheckbox defaultChecked />
        <Button variant="contained">Hello World</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
