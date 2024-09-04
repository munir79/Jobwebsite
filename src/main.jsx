import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainComponent from './MainComponent/MainComponent.jsx';
import Home from './Home/Home.jsx';
import FilterJobs from './Home/Feature/FilterJobs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponent></MainComponent>,
    children:[
      {
        
          path:"/",
          element:<Home></Home>
      
      },
      {
    path:'/filter',
    element:<FilterJobs></FilterJobs>
      }
    ]
  },
 
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='max-w-7xl mx-auto'>
   <RouterProvider router={router}>
    <App />
    </RouterProvider>
   </div>

  </StrictMode>,
)
