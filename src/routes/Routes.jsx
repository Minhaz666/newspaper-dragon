import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Categories from "../pages/Home/Categories/Categories";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";



const router = createBrowserRouter([

    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
            path:'/',
            element:<Navigate to={'/categorie'}></Navigate>,

            },

            {
                path:'/login',
                element:<Login></Login>,
            },
            
            {
                path:'/register',
                element:<Register></Register>
            }

        ]
    },


    {
        path:'/categorie',
        element:<Main></Main>,
        children:[
            {
                path:'/categorie/:id',
                element:<Categories></Categories>,
                loader:({params})=>{ return fetch(`http://localhost:5000/categories/${params.id}`)}
            },


        ]
    },
    {

        path:'/news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:'/news/:id',
                element:<News></News>,
                loader:({params})=>{return fetch(`http://localhost:5000/news/${params.id}`)}
            }
        ]

    }


])

export default router;