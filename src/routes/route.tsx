import App from "@/App";
import Tasks from "@/pages/tasks";
import Users from "@/pages/users";
import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Tasks></Tasks>,
      },
      {
        path: "users",
        element: <Users></Users>,
      },
    ],
  },
  {
    path: "/login",
    // element: <Login />,
  },
]);

export default routes;
