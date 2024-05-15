
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home';
import Navbar from '../src/components/Navbar'
// import Banner from './pages/home/Banner';

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />


        <Outlet />

        {/* <Footer /> */}
      </>

    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },  
        // {
        //   path: "/banner",
        //   element: <Banner />
        // },
        // burda olacaq about sehifesi zad duzelde bilsen



      ]
    },

  ]);

  return (

    <RouterProvider router={router} />




    //  <>
    // <Outlet/>
    //  </>
  )
}

export default App
