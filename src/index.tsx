import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';
import { App } from "./App"

setConfig({ ErrorOverlay: () => null });

const AppHot = hot(App);

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <AppHot />
  </React.StrictMode>,
  document.getElementById("root"),
)
