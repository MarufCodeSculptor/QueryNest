import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Root from './Pages/Main /Root'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
