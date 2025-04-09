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
import Player from "./components/Player/Player";
import Children from "./pages/Children/Children";
import SignUp from "./pages/SignUp/SignUp";
import SimpleLayout from "./SimpleLayout";
import SignUp2 from "./pages/SignUp/SignUp2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout with Nav + Footer
    children: [
      { index: true, element: <Home /> },
      { path: "/tvshows", element: <TvShows /> },
      { path: "/movies", element: <Movies /> },
      { path: "/new&popular", element: <NewAndPopular /> },
      { path: "/browsebylanguages", element: <BrowseByLanguages /> },
      { path: "/mylist", element: <MyList /> },
      { path: "/children", element: <Children /> },
      { path: "/player/:media_type/:id", element: <Player /> },
    ],
  },
  {
    path: "/",
    element: <SimpleLayout />, // Layout without Nav
    children: [
      { path: "/", element: <SignUp /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "signup2", element: <SignUp2 /> },
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
