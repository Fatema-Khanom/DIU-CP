// import { createBrowserRouter } from "react-router-dom";
// import Home from "../Pages/Home/Home";
// import MainLayout from "../Layout/MainLayout";
// import ErrorPage from "../Pages/Error/ErrorPage";
// import Contact from "../Pages/Contact/Contact";
// import AboutUs from "../Pages/AboutUs/AboutUs";


// const myCreatedRoute = createBrowserRouter([
//     {
//         path:"/",
//         element:<MainLayout></MainLayout>,
//         errorElement:<ErrorPage></ErrorPage>,
//         children:[
//             {
//                 path:"/",
//                 element:<Home></Home>,
                
//             },
//             {
//                 path:"/contact",
//                 element:<Contact></Contact>
                
//             },
//             {
//                 path:"/aboutus",
//                 element:<AboutUs></AboutUs>
                
//             },
            
//         ]
//     }
// ])
// export default myCreatedRoute;

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Resource from "../Pages/Resource/Resource";
import Event from "../Pages/Event/Event";
import Blog from "../Pages/Blog/Blog";

// Create a BrowserRouter with specified routes
const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/resource",
        element: <Resource></Resource>,
      },
      {
        path: "/event",
        element:<Event></Event>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default myCreatedRoute;
