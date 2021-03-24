interface Route {
  name: string;
  route: string;
  icon: string;
}

export const routes: Route[] = [
  {
    name: "Dashboard",
    route: "/",
    icon: "fas fa-tv opacity-75 mr-2 text-sm",
  },
  {
    name: "Blog",
    route: "/blog",
    icon: "fas fa-newspaper  mr-2 text-sm",
  },
  {
    name: "Login",
    route: "/auth/login",
    icon: "fas fa-sign-in-alt mr-2 text-sm",
  },
];
