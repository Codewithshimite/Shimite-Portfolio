import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/Layout.scss"









import HomePage from './pages/HomePage'; 

import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import LayoutPage from './pages/LayoutPage';
import NotFoundPage from './pages/NotFoundPage';
import PortfolioPage from './pages/PortfolioPage'
import TestimonialPage  from './pages/Testimonial';

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <LayoutPage />, // Layout wraps all pages in the website
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: "/Shimite's-Blogs", element: <BlogPage /> },
      { path: "/PortfolioPage", element: <PortfolioPage /> },
      { path: '/About-Shimite', element: <AboutPage /> },
      { path: '/ServicePage', element: <ServicePage /> },
      { path: '/TestimonialPage', element: <TestimonialPage /> },

      { path: '*', element: <NotFoundPage /> }
      
            
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>

)
