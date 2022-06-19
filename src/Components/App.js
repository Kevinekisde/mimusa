import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Themes from "../Themes/Themes";
import Home from "./Views/Home";

function App() {
  const [theme,setTheme] = useState("Dark")

  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        <Home theme={theme} setTheme={setTheme}></Home>
      </ThemeProvider>
    </>
  );
}

export default App;
