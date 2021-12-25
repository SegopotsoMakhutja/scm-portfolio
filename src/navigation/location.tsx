import {ReactLocation} from "react-location"
import {Home, About} from '../containers';

// create a location object
export const location = new ReactLocation()

// create a routes object
export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> }
]
