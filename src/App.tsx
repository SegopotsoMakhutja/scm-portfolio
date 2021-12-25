import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Router, Outlet } from "react-location";
import { location, routes } from "./navigation/location";

export const App = () => {

  return (
    <ChakraProvider theme={theme}>
      <Router location={location} routes={routes}>  
        <Outlet />
      </Router>
    </ChakraProvider>
  )
}
