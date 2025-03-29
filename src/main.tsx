import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createRoot } from "react-dom/client"
import Root from "./pages/Root"
import Home from "./pages/Home"
import SessionsPage from "./pages/Sessions"
import SessionPage from "./pages/Session"
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store'


let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "sessions", Component: SessionsPage },
      { path: "sessions/:id", Component: SessionPage }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
