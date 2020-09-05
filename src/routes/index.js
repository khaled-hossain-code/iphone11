import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import ComingSoon from "../pages/ComingSoon"

const routes = [
  {
    path: "/mac",
    component: ComingSoon,
    exact: true,
  },
  {
    path: "/ipad",
    component: ComingSoon,
    exact: true,
  },
  {
    path: "/iphone",
    component: ComingSoon,
    exact: true,
  },
  {
    path: "/watch",
    component: ComingSoon,
    exact: true,
  },
  {
    path: "/tv",
    component: ComingSoon,
    exact: true,
  },
  {
    path: "/music",
    component: ComingSoon,
    exact: true,
  },
  {
    path: "/support",
    component: ComingSoon,
    exact: true,
  },
  {
    path: "/overview",
    component: ComingSoon,
    exact: true,
  },
  {
    path: "/tech-specs",
    component: ComingSoon,
    exact: true,
  },
  {
    path: "/buy",
    component: ComingSoon,
    exact: true,
  },
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "*",
    exact: true,
    component: NotFound,
  },
]

export default routes
