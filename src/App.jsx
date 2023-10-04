import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/pages/Root";
import DashboardHome from "./routes/dashboard/Home";
import ErrorPage from "./ErrorPage";
import Dashboard from "./routes/pages/Dashboard";
import Profile from "./routes/dashboard/Profile";
import MainHome from "./routes/root/Home";
import About from "./routes/root/About";
import Contact from "./routes/root/Contact";
import Theme from "./context/darkModeContext";
import { useState } from "react";
import Login from "./routes/pages/Login";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <MainHome />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <DashboardHome />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <>
      <Theme.Provider value={{ darkMode, setDarkMode }}>
        <RouterProvider router={router} />
      </Theme.Provider>
    </>
  );
}

export default App;
