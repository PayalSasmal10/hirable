import { LoginPage } from "./components/auth/login";
import { Freelancer } from "./components/user-profile/freelancer";
import { Employer } from "./components/user-profile/employer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { JobDetailsProvider } from "./store/jobDetailsContext";
import Freelancerpage from "./components/pages/freelancerpage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/freelancer",
      element: <Freelancer />,
    },
    {
      path: "/freelancerprofile",
      element: <Freelancerpage />,
    },
    {
      path: "/employer",
      element: <Employer />,
    },
  ]);

  return (
    <div className="">
      <JobDetailsProvider>
        <RouterProvider router={router} />
      </JobDetailsProvider>
    </div>
  );
}

export default App;
