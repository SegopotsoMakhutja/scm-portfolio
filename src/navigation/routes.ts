import { About, Home } from '../containers';

export interface RouteObject {
  path: string
  breadcrumb?: string
  component: any
  title: string
}

const ROUTES: Array<RouteObject> = [
  {
    title: 'About',
    path: '/about',
    component: About
  },
  {
    title: 'Home',
    path: '/',
    component: Home
  }
]

export { ROUTES }