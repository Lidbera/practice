import React from "react";
import "./App.css";
import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColors";
import SelectColors4Class from "./components/SelectColors4Class";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors4Class />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
