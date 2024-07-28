import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import React from 'react'
import { ThemeProvider } from '@/components/theme-provider'

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      )
export const Route = createRootRoute({
  component: () => (
    <ThemeProvider>
      <div>
        <Link to="/">
          Home
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/task">
          Task
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </ThemeProvider>
  ),
})
