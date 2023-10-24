import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import LinearProgress from '@mui/material/LinearProgress'
import { ThemeModeProvider } from './theme/themeContext.tsx'
import { AppRoutes } from './routes/AppRouter.tsx'
import { AppProvider } from './context/AppContext.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

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
