import { LoginPage } from "./components/auth/login";
import { Freelancer } from "./components/user-profile/freelancer";
import { Employer } from "./components/user-profile/employer";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { HirableContext, HirableContextProvider } from "./store/hirableContext";
import Freelancerpage from "./pages/freelancerpage";
import { useContext } from "react";

function App() {
  const { isLoggedIn } = useContext(HirableContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: !isLoggedIn ? <LoginPage /> : <Navigate to="/freelancer" />,
    },
    {
      path: "/freelancer",
      element: <Freelancer /> ,
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
    <div className="App">
      <HirableContextProvider>
        <RouterProvider router={router} />
      </HirableContextProvider>
    </div>
  );
}

export default App;
