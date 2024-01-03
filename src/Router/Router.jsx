import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Contact from "../Pages/Contact/Contact";


const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                
            },
            {
                path:"/contact",
                element:<Contact></Contact>
                
            },
            
        ]
    }
])
export default myCreatedRoute;