import {
  Card,
  CardHeader,
  Switch,
  Box,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  CssBaseline,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import "./App.css";

const dark = {
  palette: {
    mode: "dark",
  },
};

const light = {
  palette: {
    mode: "light",
  },
};

//Dark theme default
export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  //will be triggered when the switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="App">
      <ThemeProvider
        theme={isDarkTheme ? createTheme(dark) : createTheme(light)}
      >
        <CssBaseline>
          <Container>
            <div className="App">
              <Box component="div" p={4} />
              <Card>
                <CardHeader
                  action={
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={isDarkTheme}
                            onChange={changeTheme}
                          />
                        }
                        label="Dark Theme"
                      />
                    </FormGroup>
                  }
                />
                <Typography variant="h3" component="h3">
                  <div className="container">
                    <div className="hPage">Home Page</div>
                    <p>
                      Howdy, Thigas' Here. Nice to meet you!
                      <br />
                      Salve, é o Thigas. Prazer em te conhecer!
                    </p>
                  </div>
                </Typography>
                <img
                  src="https://github.com/ThiagodePaulaSouza.png"
                  alt="image-profile"
                  className="App-logo"
                />
                <Typography className="body1" variant="body1">
                  Dark mode is {isDarkTheme ? "on" : "off"}
                </Typography>
              </Card>
            </div>
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}
