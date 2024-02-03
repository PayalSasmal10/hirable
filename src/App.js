import logo from './logo.svg';
import { LoginPage } from './components/auth/login';
import { Freelancer } from './components/user-profile/freelancer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage/>
    },
    {
      path: "/freelancer",
      element: <Freelancer/>
    },

  ]);

  return (
    <div className="">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
