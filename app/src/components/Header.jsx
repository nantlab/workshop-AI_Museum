import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Select from "@mui/material/Select";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import useStore from "../store/store";

function ResponsiveAppBar() {
  const language = useStore((state) => state.language);
  const setLanguage = useStore((state) => state.setLanguage);
  const languages = useStore((state) => state.languages);
  const simpleLanguage = useStore((state) => state.simpleLanguage);
  const setSimpleLanguage = useStore((state) => state.setSimpleLanguage);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ display: "flex" }}>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Container style={{ flex: 1 }}></Container>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  color="secondary"
                  checked={simpleLanguage}
                  onChange={(event) => {
                    console.log(event)
                    setSimpleLanguage(event.target.checked);
                  }}
                />
              }
              label="leichte sprache"
            />
          </FormGroup>
          <Select
            value={language}
            label="language"
            onChange={(event) => setLanguage(event.target.value)}
          >
            {languages.map((language) => {
              return (
                <MenuItem value={language} key={`language-${language}`}>
                  {language}
                </MenuItem>
              );
            })}
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
