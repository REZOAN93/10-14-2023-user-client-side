import { createBrowserRouter } from "react-router-dom";
import Users from "../Components/Users/Users";
import Root from "../Root/Root";
import ErrorPage from "./ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Users />,
        },
      ],
    },
  ]);