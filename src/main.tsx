import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import LinearProgress from '@mui/material/LinearProgress'
import { ThemeModeProvider } from './theme/themeContext.tsx'
import { AppRoutes } from './routes/AppRouter.tsx'
import { AppProvider } from './context/AppContext.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

/* HABILITAR CONDICIONALMENTE EL MOCKING DE MSW */
async function deferRender() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('../mocks/browser')

  // `worker.start()` devuelve una promesa que resuelve
  // una vez que el Service Worker está listo para interceptar solicitudes.
  return worker.start()
}

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeModeProvider>
          <Suspense fallback={<LinearProgress />}>
            <AppProvider>
              <AppRoutes />
            </AppProvider>
          </Suspense>
        </ThemeModeProvider>
      </QueryClientProvider>
    </React.StrictMode>,
  )
})
