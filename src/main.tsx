import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { ToggleColorMode } from './theme/themeContext.tsx'
import { AppRoutes } from './routes/AppRouter.tsx'
import { LinearProgress } from '@mui/material'
import { AppProvider } from './context/AppContext.tsx'
import { isMSWOn } from './config/worker.ts'

if(import.meta.env.DEV && isMSWOn){
  const { worker } = await import('../mocks/browser.ts')

  await worker.start({
    waitUntilReady: true
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<LinearProgress />}>
      <AppProvider>
        <ToggleColorMode>
          <AppRoutes />
        </ToggleColorMode>
      </AppProvider>
    </Suspense>
  </React.StrictMode>
)
