import React from 'react';

import About from './components/About';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Technologies from './components/tech/Technologies';
import Projects from './components/projects/Projects';
import AppLayout from './components/AppLayout';
import Footer from './components/footer/Footer';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/technologies', element: <Technologies /> },
      { path: '/projects', element: <Projects /> },
    ],
  },
  {
    element: <Footer />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
