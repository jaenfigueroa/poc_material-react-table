import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import LinearProgress from '@mui/material/LinearProgress'
import { ToggleColorMode } from './theme/themeContext.tsx'
import { AppRoutes } from './routes/AppRouter.tsx'
import { AppProvider } from './context/AppContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<LinearProgress />}>
      <AppProvider>
        <ToggleColorMode>
          <AppRoutes />
        </ToggleColorMode>
      </AppProvider>
    </Suspense>
  </React.StrictMode>,
)
