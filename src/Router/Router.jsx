import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";


const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        //errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                
            },
            
        ]
    }
])
export default myCreatedRoute;