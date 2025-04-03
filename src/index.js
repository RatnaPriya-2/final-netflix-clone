import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./Context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./pages/Login/Login";
import TvShows from "./pages/TvShows/TvShows";
import Movies from "./pages/Movies/Movies";
import NewAndPopular from "./pages/New&Popular/NewAndPopular";
import BrowseByLanguages from "./pages/BrowseByLanguages/BrowseByLanguages";
import MyList from "./pages/MyList/MyList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/browsebylanguages",
        element: <BrowseByLanguages />,
      },
      {
        path: "/new&popular",
        element: <NewAndPopular />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/tvshows",
        element: <TvShows />,
      },
      {
        path: "/mylist",
        element: <MyList />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);

reportWebVitals();
