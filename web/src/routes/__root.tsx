import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import React from 'react'

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
    <>
      <div
        style={{
          backgroundColor: '#f0f0f0',
          display: 'flex',
          gap: '1.5rem',
        }}
      >
        <Link
          to="/"
          activeProps={{
            style: {
              fontWeight: 'bold',
              color: 'red',
            },
          }}
        >
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/settings">Settings</Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
