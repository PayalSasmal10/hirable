import { LoginPage } from "./components/auth/login";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { HirableContext } from "./store/hirableContext";
import Freelancerpage from "./pages/freelancerpage";
import { EmployerPage } from "./pages/employerPage";
import { useContext } from "react";
import JobDetailsPage from "./pages/jobDetailsPage";
import "./App.css";

function App() {
  const { isLoggedIn, role, theme } = useContext(HirableContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: !isLoggedIn ? (
        <LoginPage />
      ) : role === "Freelancer" ? (
        <Navigate to="/freelancerjobs" />
      ) : (
        <Navigate to="/employerprofile" />
      ),
    },
    {
      path: "/freelancerjobs",
      element:
        isLoggedIn && role === "Freelancer" ? (
          <JobDetailsPage />
        ) : (
          <Navigate to="/" />
        ),
    },
    {
      path: "/freelancerprofile",
      element:
        isLoggedIn && role === "Freelancer" ? (
          <Freelancerpage />
        ) : (
          <Navigate to="/" />
        ),
    },
    {
      path: "/employerprofile",
      element:
        isLoggedIn && role === "Employer" ? (
          <EmployerPage />
        ) : (
          <Navigate to="/" />
        ),
    },
  ]);

  return (
    <div className={`App ${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
