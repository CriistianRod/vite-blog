import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './index.css'
import Root from './routes/root.tsx'
import ErrorPage from './error-page.tsx'
import About from './routes/about.tsx'
import Blog from './routes/blog.tsx'
import Contact from './routes/contact.tsx'
import { Grid } from '@mui/material'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "blog",
    element: <Blog />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "contact",
    element: <Contact />
  }
]);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid>
      <RouterProvider router={router} /> 
      </Grid>
    </ThemeProvider>
  </React.StrictMode>,
)
