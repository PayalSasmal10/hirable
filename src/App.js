import { LoginPage } from "./components/auth/login";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { HirableContext, HirableContextProvider } from "./store/hirableContext";
import Freelancerpage from "./pages/freelancerpage";
import {EmployerPage} from "./pages/employerPage";
import { useContext } from "react";
import JobDetailsPage from "./pages/jobDetailsPage";

function App() {
  const { isLoggedIn } = useContext(HirableContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: !isLoggedIn ? <LoginPage /> : <Navigate to="/jobs" />,
    },
    {
      path: "/jobs",
      element: <JobDetailsPage />,
    },
    {
      path: "/freelancer",
      element: <Freelancerpage />,
    },
    {
      path: "/employer",
      element: <EmployerPage />,
    },
  ]);

  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
