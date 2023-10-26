import { LinearProgress } from '@mui/material'
import { Suspense, lazy } from 'react'
import { isHashed } from '../config/router'
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

const RouterFn = isHashed ? HashRouter : BrowserRouter

const Login = lazy(() => import('../pages/Login'))
const Admin = lazy(() => import('../pages/Admin'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Header = lazy(() => import('../components/header'))

const RoutesList = [
  {
    path: '/',
    element: <Navigate to='/login' />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export const AppRoutes = () => {
  return (
    <RouterFn>
      <Header />
      <Routes>
        {RoutesList.map((route) => (
          <Route
            key={crypto.randomUUID()}
            path={route.path}
            element={
              <Suspense fallback={<LinearProgress />}>{route.element}</Suspense>
            }
          />
        ))}
      </Routes>
    </RouterFn>
  )
}
