import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Router, Outlet } from "react-location";
import { location, routes } from "./navigation/location";

export const App = () => {

  return (
    <ChakraProvider theme={theme}>
      <Router location={location} routes={routes}>  
        <Box textAlign="center" fontSize="xl">
          <ColorModeSwitcher justifySelf="flex-end" />
          <Outlet />
        </Box>
      </Router>
    </ChakraProvider>
  )
}
