import '../src/styles/globals.scss';
import Navbar from '../src/components/navbar/Navbar';
import Footer from './components/footer/Footer';

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from './pages/home/Home';
import Booking from './pages/booking/Booking';

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/booking",
          element: <Booking />
        }
      ]
    },
    {
      path: "/login",
      element: <Home />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App;
